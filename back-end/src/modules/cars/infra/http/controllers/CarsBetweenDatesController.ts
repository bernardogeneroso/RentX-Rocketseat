import { Request, Response } from "express";
import { container } from "tsyringe";

import CarsBetweenDatesService from "@modules/cars/services/CarsBetweenDatesService";

class CarsBetweenDatesController {
  async index(request: Request, response: Response): Promise<Response> {
    const { dates, filter } = request.body;

    const carsBetweenDatesService = container.resolve(CarsBetweenDatesService);

    const carsBetweenDates = await carsBetweenDatesService.execute({
      dates,
      filter,
    });

    return response.json(carsBetweenDates);
  }
}

export default CarsBetweenDatesController;
