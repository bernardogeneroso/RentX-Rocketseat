import { Cars as Car } from "@prisma/client";
import { injectable } from "tsyringe";

import CarsRepository from "../infra/prisma/repositories/CarsRepository";
import ICarsRepository from "../repositories/ICarsRepository";

@injectable()
class AllCarsService {
  private carsRepository: ICarsRepository;

  constructor() {
    this.carsRepository = new CarsRepository();
  }

  async execute(): Promise<Car[] | null> {
    return await this.carsRepository.findAllCars();
  }
}

export default AllCarsService;
