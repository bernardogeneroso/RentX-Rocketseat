import { inject, injectable } from "tsyringe";
import { Cars as Car } from "@prisma/client";

import CarsRepository from "../infra/prisma/repositories/CarsRepository";
import ICarsRepository from "../repositories/ICarsRepository";
import ICacheProvider from "@shared/container/providers/CacheProvider/models/ICacheProvider";

interface IResponse {
  search: string | null;
}

@injectable()
class AllCarsService {
  private carsRepository: ICarsRepository;

  constructor(@inject("CacheProvider") private cacheProvider: ICacheProvider) {
    this.carsRepository = new CarsRepository();
  }

  async execute({ search }: IResponse): Promise<Car[] | null> {
    let allCars = await this.cacheProvider.recover<Car[]>(
      search ? `all-cars:${search}` : `all-cars`
    );

    if (!allCars || allCars.length === 0) {
      const findAllCars = await this.carsRepository.findAllCars(search);

      await this.cacheProvider.save(
        search ? `all-cars:${search}` : `all-cars`,
        findAllCars
      );

      return findAllCars;
    }

    return allCars;
  }
}

export default AllCarsService;
