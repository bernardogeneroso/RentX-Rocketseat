import { Cars as Car } from ".prisma/client";

import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { IFindCarsAvailableBetweenDatesDTO } from "@modules/cars/dtos/IFindCarsAvailableBetweenDatesDTO";
import ICarsRepository from "@modules/cars/repositories/ICarsRepository";
import { prisma } from "@shared/services/prisma";

class CarsRepository implements ICarsRepository {
  async findAllCars(search: string | null): Promise<Car[] | null> {
    search || (search = "");

    return await prisma.cars.findMany({
      include: {
        carsImages: {
          select: {
            url: true,
          },
        },
      },
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
      take: search ? 3 : undefined,
    });
  }

  async findById(plate: string): Promise<Car | null> {
    return await prisma.cars.findUnique({
      include: {
        carsImages: true,
      },
      where: {
        plate,
      },
    });
  }

  async findCarDetailsById(plate: string): Promise<Car | null> {
    return await prisma.cars.findUnique({
      include: {
        carsImages: {
          select: {
            url: true,
          },
        },
        carDetail: true,
      },
      where: {
        plate,
      },
    });
  }

  async findCarsRentedByUser(userId: string): Promise<Car[] | null> {
    return await prisma.cars.findMany({
      include: {
        carsImages: {
          select: {
            url: true,
          },
        },
        carsAppointments: {
          select: {
            start_in: true,
            end_in: true,
            rentalPrice: true,
          },
          orderBy: {
            start_in: "desc",
          },
          where: {
            userId,
          },
        },
      },
      where: {
        carsAppointments: {
          some: {
            userId,
          },
        },
      },
    });
  }

  async findCarsAvailableBetweenDates(
    data: IFindCarsAvailableBetweenDatesDTO
  ): Promise<Car[] | null> {
    return prisma.cars.findMany({
      include: {
        carsImages: {
          select: {
            url: true,
          },
        },
      },
      where: {
        carsAppointments: {
          none: {
            OR: [
              {
                start_in: {
                  gte: data.dates.startDate,
                  lte: data.dates.endDate,
                },
              },
              {
                end_in: {
                  gte: data.dates.startDate,
                  lte: data.dates.endDate,
                },
              },
            ],
          },
        },
        fuel: data.filter?.fuel,
        transmission: data.filter?.transmission,
        pricePerDay: {
          gte: data.filter?.pricesPerDay.startPricePerDay,
          lte: data.filter?.pricesPerDay.endPricePerDay,
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
