import { injectable, inject } from "tsyringe";
import { Cars as Car } from "@prisma/client";

import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import CarsRepository from "../infra/prisma/repositories/CarsRepository";
import ICarsRepository from "../repositories/ICarsRepository";
import ICacheProvider from "@shared/container/providers/CacheProvider/models/ICacheProvider";

@injectable()
class CreateCarService {
  private carsRepository: ICarsRepository;

  constructor(@inject("CacheProvider") private cacheProvider: ICacheProvider) {
    this.carsRepository = new CarsRepository();
  }

  async execute(data: ICreateCarDTO): Promise<Car> {
    const car = await this.carsRepository.create(data);

    await this.cacheProvider.invalidate("all-cars");
    await this.cacheProvider.invalidatePrefix("all-cars");

    return car;
  }
}

export default CreateCarService;
