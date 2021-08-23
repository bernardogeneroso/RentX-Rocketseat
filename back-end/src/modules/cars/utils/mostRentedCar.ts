import {
  CarModified,
  CountsCarsHasBeenUsed,
} from "../services/MostRentedCarByUserService";

export function mostRentedCar(counts: CountsCarsHasBeenUsed): CarModified {
  const countsArray = Object.entries(counts);

  let car: CarModified = {} as CarModified;

  for (let i = 0; i < countsArray.length; i++) {
    const used = countsArray[i][1].used;

    if (Object.keys(car).length === 0 || car.used < used) {
      car = countsArray[i][1];
    }
  }

  return car;
}
