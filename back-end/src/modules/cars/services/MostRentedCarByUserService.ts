import { CarsAppointments as CarAppointment } from "@prisma/client";

import ICarsRepository from "../repositories/ICarsRepository";
import CarsRepository from "../infra/prisma/repositories/CarsRepository";
import CarsAppointmentsRepository from "../infra/prisma/repositories/CarsAppointmentsRepository";
import ICarsAppointmentsRepository from "../repositories/ICarsAppointmentsRepository";
import { mostRentedCar } from "../utils/mostRentedCar";
import { sumOfDaysCarWasUsed } from "../utils/sumOfDaysCarWasUsed";
import { divideCarsByRegistration } from "../utils/divideCarsByRegistration";
import { sumTotalAppointments } from "../utils/sumTotalAppointments";
import AppError from "@shared/errors/AppError";

export interface CarModified extends CarAppointment {
  used: number;
}

export interface CountsCarsHasBeenUsed {
  [plate: string]: CarModified;
}

interface CarRequest {
  used: number;
  daysUsed: number;
}

interface IRequest {
  totalAppointments: number;
  car: CarRequest;
}

class CreateCarAppointmentService {
  private carsRepository: ICarsRepository;
  private carsAppointmentsRepository: ICarsAppointmentsRepository;

  constructor() {
    this.carsAppointmentsRepository = new CarsAppointmentsRepository();
    this.carsRepository = new CarsRepository();
  }

  async execute(userId: string): Promise<IRequest> {
    const carsRentedByUser =
      await this.carsAppointmentsRepository.carsRentedByUser(userId);

    if (!carsRentedByUser) throw new AppError("Error on get favorite car", 404);

    const carsDivided = divideCarsByRegistration(carsRentedByUser);

    const totalAppointments = sumTotalAppointments(carsDivided);

    // Most rental car
    const appointment = mostRentedCar(carsDivided);

    // Sum of days of car more rental
    const daysUsed = sumOfDaysCarWasUsed(carsRentedByUser, appointment.carId);

    // Get information about car
    const car = await this.carsRepository.findById(appointment.carId);
    // @ts-ignore
    delete car.carDetailId;

    return {
      totalAppointments,
      car: {
        ...car,
        used: appointment.used,
        daysUsed,
      },
    };
  }
}

export default CreateCarAppointmentService;
