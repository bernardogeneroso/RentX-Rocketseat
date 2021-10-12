import { inject, injectable } from "tsyringe";
import { Cars as Car } from "@prisma/client";

import ICarsRepository from "../repositories/ICarsRepository";
import CarsRepository from "../infra/prisma/repositories/CarsRepository";
import ICacheProvider from "@shared/container/providers/CacheProvider/models/ICacheProvider";

@injectable()
class CarDetailsService {
  private carsRepository: ICarsRepository;

  constructor(@inject("CacheProvider") private cacheProvider: ICacheProvider) {
    this.carsRepository = new CarsRepository();
  }

  async execute(plate: string): Promise<Car | null> {
    let carWithDetails = await this.cacheProvider.recover<Car>(
      `car-details:${plate}`
    );

    if (!carWithDetails) {
      carWithDetails = await this.carsRepository.findCarDetailsById(plate);

      await this.cacheProvider.save(`car-details:${plate}`, carWithDetails);
    }

    return carWithDetails;
  }
}

export default CarDetailsService;
