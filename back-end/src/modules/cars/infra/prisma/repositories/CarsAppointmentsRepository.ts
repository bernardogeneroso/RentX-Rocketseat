import { CarsAppointments as CarAppointment } from "@prisma/client";

import { ICreateCarsAppointmentsDTO } from "@modules/cars/dtos/ICreateCarsAppointmentsDTO";
import { ICountCarsAvailableDTO } from "@modules/cars/dtos/ICountCarsAvailableDTO";
import ICarsAppointmentsRepository from "@modules/cars/repositories/ICarsAppointmentsRepository";
import { prisma } from "@shared/services/prisma";

class CarsAppointmentsRepository implements ICarsAppointmentsRepository {
  async countCarsAvailable({
    carId,
    date: { startDate, endDate },
  }: ICountCarsAvailableDTO): Promise<number | null> {
    return await prisma.carsAppointments.count({
      where: {
        carId,
        OR: [
          {
            start_in: {
              gte: startDate,
              lte: endDate,
            },
          },
          {
            end_in: {
              gte: startDate,
              lte: endDate,
            },
          },
        ],
      },
    });
  }

  async findUserScheduledCars(
    userId: string
  ): Promise<CarAppointment[] | null> {
    return await prisma.carsAppointments.findMany({
      where: {
        userId,
      },
    });
  }

  async findUserScheduledCarsRented(
    userId: string
  ): Promise<CarAppointment[] | null> {
    return await prisma.carsAppointments.findMany({
      include: {
        car: {
          include: {
            carsImages: {
              select: {
                url: true,
              },
            },
          },
        },
      },
      where: {
        userId,
      },
      orderBy: {
        start_in: "desc",
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
