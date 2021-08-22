import { Cars as Car } from "@prisma/client";

import ICreateCarDTO from "../dtos/ICreateCarDTO";

interface ICarsRepository {
  findAllCars(): Promise<Car[] | null>;
  findById(plate: string): Promise<Car | null>;
  findCarsAvailableBetweenDates(
    startDate: Date,
    endDate: Date
  ): Promise<Car[] | null>;
  create(data: ICreateCarDTO): Promise<Car>;
}

export default ICarsRepository;
