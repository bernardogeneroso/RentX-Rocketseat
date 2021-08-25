import { Cars as Car } from "@prisma/client";

import ICarsRepository from "../repositories/ICarsRepository";
import CarsRepository from "../infra/prisma/repositories/CarsRepository";

class CarDetailsService {
  private carsRepository: ICarsRepository;

  constructor() {
    this.carsRepository = new CarsRepository();
  }

  async execute(plate: string): Promise<Car | null> {
    return await this.carsRepository.findCarDetailsById(plate);
  }
}

export default CarDetailsService;
