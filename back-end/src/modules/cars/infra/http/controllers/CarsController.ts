import { Request, Response } from "express";
import { container } from "tsyringe";

import AllCarsService from "../../../services/AllCarsService";
import CreateCarService from "../../../services/CreateCarService";
import ScheduledCarsByUser from "../../../services/ScheduledCarsByUser";
import MostRentedCarByUserService from "../../../services/MostRentedCarByUserService";
import UpdateCarImagesService from "../../../services/UpdateCarImagesService";
import CarDetailsService from "../../../services/CarDetailsService";
import AppError from "@shared/errors/AppError";
import { carsTransformer } from "@modules/cars/utils/carsTransformer";

class CarsController {
  async allCars(request: Request, response: Response): Promise<Response> {
    const { search } = request.query;

    const allCarsService = container.resolve(AllCarsService);

    const cars = await allCarsService.execute({
      search: search?.toString() || null,
    });

    return response.json(carsTransformer(cars));
  }

  async carDetails(request: Request, response: Response): Promise<Response> {
    const { plate } = request.params;

    const carDetailsService = container.resolve(CarDetailsService);

    const car = await carDetailsService.execute(plate);

    return response.json(carsTransformer(car));
  }

  async favouriteCar(request: Request, response: Response): Promise<Response> {
    const mostRentedCarByUserService = container.resolve(
      MostRentedCarByUserService
    );

    const userId = request.user.id;

    const car = await mostRentedCarByUserService.execute(userId);

    return response.json(car);
  }

  async userSchedules(request: Request, response: Response): Promise<Response> {
    const scheduledCarsByUser = container.resolve(ScheduledCarsByUser);

    const userId = request.user.id;

    const carsSchedules = await scheduledCarsByUser.execute(userId);

    return response.json(carsTransformer(carsSchedules));
  }

  async create(request: Request, response: Response): Promise<Response> {
    const {
      plate,
      brand,
      model,
      colour,
      fuel,
      transmission,
      pricePerDay,
      carDetail,
    } = request.body;

    const createCarService = container.resolve(CreateCarService);

    const car = await createCarService.execute({
      plate,
      brand,
      model,
      colour,
      fuel,
      transmission,
      pricePerDay,
      carDetail: {
        create: carDetail,
      },
    });

    return response.json(car);
  }

  async updateImages(request: Request, response: Response): Promise<Response> {
    const { oldUrl, carId } = request.body;
    const url = request.file?.filename;

    if (!url) throw new AppError("Image file is required!");

    const updateCarImagesService = container.resolve(UpdateCarImagesService);

    const data = await updateCarImagesService.execute({
      carId,
      url,
      oldUrl,
    });

    return response.json(data);
  }
}

export default CarsController;
