import { Cars as Car } from "@prisma/client";

import CarsRepository from "../infra/prisma/repositories/CarsRepository";
import ICarsRepository from "../repositories/ICarsRepository";

interface IResponse {
  search: string | null;
}

class AllCarsService {
  private carsRepository: ICarsRepository;

  constructor() {
    this.carsRepository = new CarsRepository();
  }

  async execute({ search }: IResponse): Promise<Car[] | null> {
    return await this.carsRepository.findAllCars(search);
  }
}

export default AllCarsService;
