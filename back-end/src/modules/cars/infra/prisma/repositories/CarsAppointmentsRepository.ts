import { CarsAppointments as CarAppointment } from "@prisma/client";

import ICreateCarsAppointmentsDTO from "@modules/cars/dtos/ICreateCarsAppointmentsDTO";
import ICarsAppointmentsRepository from "@modules/cars/repositories/ICarsAppointmentsRepository";
import { prisma } from "@shared/services/prisma";

class CarsAppointmentsRepository implements ICarsAppointmentsRepository {
  async findUserScheduledCars(
    userId: string
  ): Promise<CarAppointment[] | null> {
    return await prisma.carsAppointments.findMany({
      where: {
        userId,
      },
    });
  }

  async countCarsAvailable(
    carId: string,
    startDate: Date
  ): Promise<number | null> {
    return await prisma.carsAppointments.count({
      where: {
        carId,
        end_in: {
          gte: startDate,
        },
      },
    });
  }

  async create(data: ICreateCarsAppointmentsDTO): Promise<CarAppointment> {
    return await prisma.carsAppointments.create({
      data,
    });
  }
}

export default CarsAppointmentsRepository;
