import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";

import CarsAppointmentsController from "../../controllers/CarsAppointmentsController";

const appointmentsRouter = Router();

const carsAppointmentsController = new CarsAppointmentsController();

appointmentsRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      carId: Joi.string().min(6).max(6).required(),
      start_in: Joi.date().required(),
      end_in: Joi.date().required(),
    },
  }),
  carsAppointmentsController.create
);

export default appointmentsRouter;
