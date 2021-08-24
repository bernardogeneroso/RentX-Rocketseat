import { CarsAppointments as CarAppointment } from "@prisma/client";
import { isPast, differenceInDays, compareAsc } from "date-fns";

import ICreateCarsAppointmentsDTO from "../dtos/ICreateCarsAppointmentsDTO";
import CarsAppointmentsRepository from "../infra/prisma/repositories/CarsAppointmentsRepository";
import CarsRepository from "../infra/prisma/repositories/CarsRepository";
import ICarsAppointmentsRepository from "../repositories/ICarsAppointmentsRepository";
import ICarsRepository from "../repositories/ICarsRepository";
import AppError from "@shared/errors/AppError";

class CreateCarAppointmentService {
  private carsRepository: ICarsRepository;
  private carsAppointmentsRepository: ICarsAppointmentsRepository;

  constructor() {
    this.carsAppointmentsRepository = new CarsAppointmentsRepository();
    this.carsRepository = new CarsRepository();
  }

  async execute(
    data: Omit<ICreateCarsAppointmentsDTO, "rentalPrice">
  ): Promise<CarAppointment> {
    if (compareAsc(data.start_in, data.end_in) > 0)
      throw new AppError("Error, invalid dates");

    if (isPast(data.start_in) || isPast(data.end_in))
      throw new AppError("Error, invalid dates");

    const carToRental = await this.carsRepository.findById(data.carId);

    if (!carToRental) throw new AppError("Error on create appointment");

    const countCarAvailable =
      await this.carsAppointmentsRepository.countCarsAvailable(
        data.carId,
        data.start_in
      );

    if (countCarAvailable !== 0)
      throw new AppError("Error on create appointment");

    const rentalPrice =
      carToRental.pricePerDay *
      (differenceInDays(data.end_in, data.start_in) || 1);

    try {
      const appointment = await this.carsAppointmentsRepository.create({
        ...data,
        rentalPrice,
      });

      return appointment;
    } catch {
      throw new AppError("Error on create appointment");
    }
  }
}

export default CreateCarAppointmentService;
