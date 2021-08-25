import { CarsImages as CarImage } from "@prisma/client";

import { ICreateCarImagesDTO } from "../dtos/ICreateCarImagesDTO";

interface ICarsImagesRepository {
  findCarImage(url: string): Promise<CarImage | null>;
  countCarImages(carId: string): Promise<number>;
  upsertCarImage(data: ICreateCarImagesDTO): Promise<CarImage>;
}

export default ICarsImagesRepository;
