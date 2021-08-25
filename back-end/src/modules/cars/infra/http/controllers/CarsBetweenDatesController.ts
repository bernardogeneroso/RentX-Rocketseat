import { Request, Response } from "express";
import { container } from "tsyringe";

import CarsBetweenDatesService from "../../../services/CarsBetweenDatesService";
import { carsTransformer } from "../../../utils/carsTransformer";

class CarsBetweenDatesController {
  async index(request: Request, response: Response): Promise<Response> {
    const { dates, filter } = request.body;

    const carsBetweenDatesService = container.resolve(CarsBetweenDatesService);

    const carsBetweenDates = await carsBetweenDatesService.execute({
      dates,
      filter,
    });

    return response.json(carsTransformer(carsBetweenDates));
  }
}

export default CarsBetweenDatesController;
