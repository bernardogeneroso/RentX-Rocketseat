import { Cars as Car } from ".prisma/client";

import ICreateCarDTO from "@modules/cars/dtos/ICreateCarDTO";
import ICarsRepository from "@modules/cars/repositories/ICarsRepository";
import { prisma } from "@shared/services/prisma";

class CarsRepository implements ICarsRepository {
  async findAllCars(): Promise<Car[] | null> {
    return await prisma.cars.findMany();
  }

  async findById(plate: string): Promise<Car | null> {
    return await prisma.cars.findUnique({
      where: {
        plate,
      },
    });
  }

  async findCarsAvailableBetweenDates(
    startDate: Date,
    endDate: Date
  ): Promise<Car[] | null> {
    return prisma.cars.findMany({
      include: {
        carsAppointments: {
          where: {
            NOT: {
              start_in: {
                lte: startDate,
              },
              end_in: {
                gte: endDate,
              },
            },
          },
        },
      },
    });
  }

  async create(data: ICreateCarDTO): Promise<Car> {
    return await prisma.cars.create({
      data,
    });
  }
}

export default CarsRepository;
