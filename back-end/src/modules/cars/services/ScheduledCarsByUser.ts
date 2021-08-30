import { CarsAppointments as CarAppointment } from "@prisma/client";

import CarsAppointmentsRepository from "../infra/prisma/repositories/CarsAppointmentsRepository";
import ICarsAppointmentsRepository from "../repositories/ICarsAppointmentsRepository";
import AppError from "@shared/errors/AppError";

class ScheduledCarsByUser {
  private carsAppointmentsRepository: ICarsAppointmentsRepository;

  constructor() {
    this.carsAppointmentsRepository = new CarsAppointmentsRepository();
  }

  async execute(userId: string): Promise<CarAppointment[] | null> {
    const carsScheduledRentedByUser =
      await this.carsAppointmentsRepository.findUserScheduledCarsRented(userId);

    if (!carsScheduledRentedByUser)
      throw new AppError("Error on get scheduled cars", 404);

    return carsScheduledRentedByUser;
  }
}

export default ScheduledCarsByUser;
