import { Cars as Car } from "@prisma/client";
import { injectable } from "tsyringe";
import IFindCarsAvailableBetweenDatesDTO from "../dtos/IFindCarsAvailableBetweenDatesDTO";

import CarsRepository from "../infra/prisma/repositories/CarsRepository";
import ICarsRepository from "../repositories/ICarsRepository";

@injectable()
class CarsBetweenDatesService {
  private carsRepository: ICarsRepository;

  constructor() {
    this.carsRepository = new CarsRepository();
  }

  async execute({
    dates,
    filter,
  }: IFindCarsAvailableBetweenDatesDTO): Promise<Car[] | null> {
    return await this.carsRepository.findCarsAvailableBetweenDates({
      dates,
      filter,
    });
  }
}

export default CarsBetweenDatesService;
