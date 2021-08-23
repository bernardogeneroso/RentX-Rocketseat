import { Cars as Car } from ".prisma/client";

import ICreateCarDTO from "@modules/cars/dtos/ICreateCarDTO";
import ICarsRepository from "@modules/cars/repositories/ICarsRepository";
import { prisma } from "@shared/services/prisma";

class CarsRepository implements ICarsRepository {
  async findAllCars(search: string | null): Promise<Car[] | null> {
    search || (search = "");

    return await prisma.cars.findMany({
      where: {
        OR: [
          {
            brand: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            model: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      },
      take: 3,
    });
  }

  async findById(plate: string): Promise<Car | null> {
    return await prisma.cars.findUnique({
      where: {
        plate,
      },
    });
  }

  async findCarsRentedByUser(userId: string): Promise<Car[] | null> {
    return await prisma.cars.findMany({
      where: {
        carsAppointments: {
          some: {
            userId,
          },
        },
      },
    });
  }

  async findCarsAvailableBetweenDates(date: Date): Promise<Car[] | null> {
    return prisma.cars.findMany({
      include: {
        carsAppointments: {
          where: {
            NOT: {
              start_in: {
                gte: date,
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
