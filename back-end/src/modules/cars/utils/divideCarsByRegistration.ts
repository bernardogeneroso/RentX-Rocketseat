import { CarsAppointments as CarAppointment } from "@prisma/client";

import { CarModified } from "../services/MostRentedCarByUserService";

export interface CountsCarsHasBeenUsed {
  [plate: string]: CarModified;
}

export function divideCarsByRegistration(
  carsRentedByUser: CarAppointment[]
): CountsCarsHasBeenUsed {
  const counts: CountsCarsHasBeenUsed = {};

  carsRentedByUser.forEach((x) => {
    try {
      counts[x.carId] = {
        ...x,
        used: (counts[x.carId].used || 0) + 1,
      };
    } catch {
      counts[x.carId] = {
        ...x,
        used: 1,
      };
    }
  });

  return counts;
}
