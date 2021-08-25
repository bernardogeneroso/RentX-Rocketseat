import { CarsImages as CarImage } from ".prisma/client";

import { ICreateCarImagesDTO } from "@modules/cars/dtos/ICreateCarImagesDTO";
import ICarsImagesRepository from "@modules/cars/repositories/ICarsImagesRepository";
import { prisma } from "@shared/services/prisma";

class CarsImagesRepository implements ICarsImagesRepository {
  async findCarImage(url: string): Promise<CarImage | null> {
    return await prisma.carsImages.findUnique({
      where: {
        url,
      },
    });
  }

  async countCarImages(carId: string): Promise<number> {
    return await prisma.carsImages.count({
      where: {
        carId,
      },
    });
  }

  async upsertCarImage({
    url,
    oldUrl,
    carId,
  }: ICreateCarImagesDTO): Promise<CarImage> {
    return await prisma.carsImages.upsert({
      where: {
        url: oldUrl || url,
      },
      update: {
        url,
      },
      create: {
        url,
        carId,
      },
    });
  }
}

export default CarsImagesRepository;
