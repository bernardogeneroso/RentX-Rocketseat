import { Request, Response } from "express";
import { container } from "tsyringe";

import AllCarsService from "../../../services/AllCarsService";
import CreateCarService from "../../../services/CreateCarService";
import ScheduledCarsByUser from "../../../services/ScheduledCarsByUser";
import MostRentedCarByUserService from "../../../services/MostRentedCarByUserService";

class CarsController {
  async allCars(request: Request, response: Response): Promise<Response> {
    const { search } = request.query;

    const allCarsService = container.resolve(AllCarsService);

    const cars = await allCarsService.execute({
      search: search?.toString() || null,
    });

    return response.json(cars);
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

    return response.json(carsSchedules);
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
}

export default CarsController;
