import { injectable, inject } from "tsyringe";

import CarsImagesRepository from "../infra/prisma/repositories/CarsImagesRepository";
import ICarsImagesRepository from "../repositories/ICarsImagesRepository";
import IStorageProvider from "@shared/container/providers/StorageProvider/models/IStorageProvider";
import ICacheProvider from "@shared/container/providers/CacheProvider/models/ICacheProvider";
import { ICreateCarImagesDTO } from "../dtos/ICreateCarImagesDTO";
import AppError from "@shared/errors/AppError";

interface IResponse {
  url: string;
}

@injectable()
class ScheduledCarsByUser {
  private carsImagesRepository: ICarsImagesRepository;

  constructor(
    @inject("StorageProvider") private storageProvider: IStorageProvider,
    @inject("CacheProvider") private cacheProvider: ICacheProvider
  ) {
    this.carsImagesRepository = new CarsImagesRepository();
  }

  async execute({
    url,
    carId,
    oldUrl,
  }: ICreateCarImagesDTO): Promise<IResponse> {
    if (!oldUrl) {
      const numberExistingImages =
        await this.carsImagesRepository.countCarImages(carId);

      if (numberExistingImages === 4) {
        await this.storageProvider.deleteFile({
          file: url,
          options: "rest",
        });

        throw new AppError("Error on add car image");
      }

      await this.storageProvider.saveFile({
        file: url,
        options: "carImages",
      });

      await this.carsImagesRepository.upsertCarImage({
        url,
        carId,
      });

      await this.cacheProvider.invalidate("all-cars");
      await this.cacheProvider.invalidatePrefix("all-cars");

      return {
        url,
      };
    } else {
      const imageContent = await this.carsImagesRepository.findCarImage(oldUrl);

      if (!imageContent) {
        await this.storageProvider.deleteFile({
          file: oldUrl,
          options: "rest",
        });

        throw new AppError("Error on update car image");
      }

      await this.storageProvider.deleteFile({
        file: oldUrl,
        options: "carImages",
      });

      await this.storageProvider.saveFile({
        file: url,
        options: "carImages",
      });

      await this.carsImagesRepository.upsertCarImage({
        url,
        oldUrl,
        carId,
      });

      await this.cacheProvider.invalidate("all-cars");
      await this.cacheProvider.invalidatePrefix("all-cars");

      return {
        url: oldUrl,
      };
    }
  }
}

export default ScheduledCarsByUser;
