import { injectable, inject } from "tsyringe";

import CarsImagesRepository from "../infra/prisma/repositories/CarsImagesRepository";
import ICarsImagesRepository from "../repositories/ICarsImagesRepository";
import IStorageProvider from "@shared/container/providers/StorageProvider/models/IStorageProvider";
import { ICreateCarImagesDTO } from "../dtos/ICreateCarImagesDTO";
import AppError from "@shared/errors/AppError";

interface IResponse {
  url: string;
}

@injectable()
class ScheduledCarsByUser {
  private carsImagesRepository: ICarsImagesRepository;

  constructor(
    @inject("StorageProvider") private storageProvider: IStorageProvider
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

      return {
        url: oldUrl,
      };
    }
  }
}

export default ScheduledCarsByUser;
