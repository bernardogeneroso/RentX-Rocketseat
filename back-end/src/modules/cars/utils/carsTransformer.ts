import { Cars as Car } from "@prisma/client";

import AppError from "@shared/errors/AppError";

interface CarWithImages extends Car {
  carsImages: {
    url: string | null;
  }[];
}

export function carsTransformer(cars: CarWithImages[] | null | any): any {
  const staticUrl = "/cars/image/";

  if (!cars) return null;

  try {
    if (cars instanceof Array) {
      cars.map((item) => {
        if (item.carsImages instanceof Array) {
          item.carsImages.forEach((image: any, index: number) => {
            item.carsImages[index] = {
              url: image.url
                ? process.env.APP_API_URL
                  ? process.env.APP_API_URL + staticUrl + image.url
                  : null
                : null,
            };
          });
        } else {
          throw new Error();
        }

        return {
          item,
        };
      });
    } else {
      if (cars.carsImages instanceof Array) {
        return {
          ...cars,
          carsImages: cars.carsImages.map((image: any) => ({
            url: image.url
              ? process.env.APP_API_URL
                ? process.env.APP_API_URL + staticUrl + image.url
                : null
              : null,
          })),
        };
      }
    }

    return cars;
  } catch (err) {
    throw new AppError("Error on transform cars images");
  }
}
