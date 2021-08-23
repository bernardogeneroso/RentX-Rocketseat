import { CarsAppointments as CarAppointment } from ".prisma/client";
import { differenceInDays } from "date-fns";

interface SumEachPeriodWithCar {
  days: number;
}

export function sumOfDaysCarWasUsed(
  cars: CarAppointment[],
  carId: string
): number {
  const carsWithSameCarId = cars.filter((car) => car.carId === carId);

  const sumEachPeriodWithCar: SumEachPeriodWithCar[] = carsWithSameCarId.map(
    (car) => ({
      days: differenceInDays(car.end_in, car.start_in) || 1,
    })
  );

  let sumDays = 0;

  sumEachPeriodWithCar.forEach((value) => (sumDays += value.days));

  return sumDays;
}
