import { Cars as Car } from "@prisma/client";

import CarsRepository from "../infra/prisma/repositories/CarsRepository";
import ICarsRepository from "../repositories/ICarsRepository";
import AppError from "@shared/errors/AppError";

class ScheduledCarsByUser {
  private carsRepository: ICarsRepository;

  constructor() {
    this.carsRepository = new CarsRepository();
  }

  async execute(userId: string): Promise<Car[] | null> {
    const carsRentedByUser = await this.carsRepository.findCarsRentedByUser(
      userId
    );

    if (!carsRentedByUser)
      throw new AppError("Error on get scheduled cars", 404);

    return carsRentedByUser;
  }
}

export default ScheduledCarsByUser;
