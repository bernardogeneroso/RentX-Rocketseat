import { Request, Response } from "express";
import { container } from "tsyringe";

import CarsBetweenDatesService from "@modules/cars/services/CarsBetweenDatesService";

class CarsBetweenDatesController {
  async index(request: Request, response: Response): Promise<Response> {
    const { date, filter } = request.body;

    const carsBetweenDatesService = container.resolve(CarsBetweenDatesService);

    const carsBetweenDates = await carsBetweenDatesService.execute({
      date,
      filter,
    });

    return response.json(carsBetweenDates);
  }
}

export default CarsBetweenDatesController;
