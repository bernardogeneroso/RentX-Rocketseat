import { Cars as Car } from "@prisma/client";

import ICreateCarDTO from "../dtos/ICreateCarDTO";
import IFindCarsAvailableBetweenDatesDTO from "../dtos/IFindCarsAvailableBetweenDatesDTO";

interface ICarsRepository {
  findAllCars(search: string | null): Promise<Car[] | null>;
  findById(plate: string): Promise<Car | null>;
  findCarsRentedByUser(userId: string): Promise<Car[] | null>;
  findCarsAvailableBetweenDates(
    data: IFindCarsAvailableBetweenDatesDTO
  ): Promise<Car[] | null>;
  create(data: ICreateCarDTO): Promise<Car>;
}

export default ICarsRepository;
