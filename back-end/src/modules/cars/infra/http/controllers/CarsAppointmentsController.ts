import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateCarAppointmentService from "../../../services/CreateCarAppointmentService";

class CarsAppointmentsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { carId, start_in, end_in } = request.body;

    const userId = request.user.id;

    const createCarAppointmentService = container.resolve(
      CreateCarAppointmentService
    );

    const car = await createCarAppointmentService.execute({
      carId,
      userId,
      start_in,
      end_in,
    });

    return response.json(car);
  }
}

export default CarsAppointmentsController;
