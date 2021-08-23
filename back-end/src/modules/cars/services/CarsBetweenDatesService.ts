import { Cars as Car } from "@prisma/client";
import { injectable } from "tsyringe";

import CarsRepository from "../infra/prisma/repositories/CarsRepository";
import ICarsRepository from "../repositories/ICarsRepository";

interface IRequest {
  date: Date;
}

@injectable()
class CarsBetweenDatesService {
  private carsRepository: ICarsRepository;

  constructor() {
    this.carsRepository = new CarsRepository();
  }

  async execute({ date }: IRequest): Promise<Car[] | null> {
    return await this.carsRepository.findCarsAvailableBetweenDates(date);
  }
}

export default CarsBetweenDatesService;
