import { Cars as Car } from "@prisma/client";
import { startOfDay, parseISO } from "date-fns";

import CarsRepository from "../infra/prisma/repositories/CarsRepository";
import ICarsRepository from "../repositories/ICarsRepository";

interface IRequest {
  dates: {
    startDate: string;
    endDate: string;
  };
  filter?: {
    pricesPerDay: {
      startPricePerDay: number;
      endPricePerDay: number;
    };
    fuel: "gasoline" | "electric" | "alcohol";
    transmission: "auto" | "manual";
  };
}

class CarsBetweenDatesService {
  private carsRepository: ICarsRepository;

  constructor() {
    this.carsRepository = new CarsRepository();
  }

  async execute({ dates, filter }: IRequest): Promise<Car[] | null> {
    const treatedDates = {
      startDate: startOfDay(parseISO(dates.startDate)),
      endDate: startOfDay(parseISO(dates.endDate)),
    };

    return await this.carsRepository.findCarsAvailableBetweenDates({
      dates: treatedDates,
      filter,
    });
  }
}

export default CarsBetweenDatesService;
