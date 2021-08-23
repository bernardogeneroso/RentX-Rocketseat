import { CarsAppointments as CarAppointment } from "@prisma/client";

import ICarsRepository from "../repositories/ICarsRepository";
import CarsRepository from "../infra/prisma/repositories/CarsRepository";
import CarsAppointmentsRepository from "../infra/prisma/repositories/CarsAppointmentsRepository";
import ICarsAppointmentsRepository from "../repositories/ICarsAppointmentsRepository";
import AppError from "@shared/errors/AppError";
import { mostRentalCar } from "../utils/mostRentalCar";
import { sumOfDaysCarWasUsed } from "../utils/sumOfDaysCarWasUsed";

export interface CarModified extends CarAppointment {
  used: number;
}

export interface CountsCarsHasBeenUsed {
  [plate: string]: CarModified;
}

class CreateCarAppointmentService {
  private carsRepository: ICarsRepository;
  private carsAppointmentsRepository: ICarsAppointmentsRepository;

  constructor() {
    this.carsAppointmentsRepository = new CarsAppointmentsRepository();
    this.carsRepository = new CarsRepository();
  }

  async execute(userId: string): Promise<any> {
    const carsRentedByUser =
      await this.carsAppointmentsRepository.carsRentedByUser(userId);

    if (!carsRentedByUser) throw new AppError("Error on get favorite car", 404);

    const counts: CountsCarsHasBeenUsed = {};

    carsRentedByUser.forEach((x) => {
      try {
        counts[x.carId] = {
          ...x,
          used: (counts[x.carId].used || 0) + 1,
        };
      } catch {
        counts[x.carId] = {
          ...x,
          used: 1,
        };
      }
    });

    const totalAppointments = Object.values(counts).reduce(
      (a: any, b: any) => a.used + b.used
    );

    // Most rental car
    const appointment = mostRentalCar(counts);

    const car = await this.carsRepository.findById(appointment.carId);

    // @ts-ignore
    delete car.carDetailId;

    // Sum of days of car more rental
    const daysUsed = sumOfDaysCarWasUsed(carsRentedByUser, appointment.carId);

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
