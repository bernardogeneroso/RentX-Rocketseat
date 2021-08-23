import { Cars as Car } from "@prisma/client";
import { injectable } from "tsyringe";

import ICreateCarDTO from "../dtos/ICreateCarDTO";
import CarsRepository from "../infra/prisma/repositories/CarsRepository";
import ICarsRepository from "../repositories/ICarsRepository";

@injectable()
class CreateCarService {
  private carsRepository: ICarsRepository;

  constructor() {
    this.carsRepository = new CarsRepository();
  }

  async execute(data: ICreateCarDTO): Promise<Car> {
    return await this.carsRepository.create(data);
  }
}

export default CreateCarService;