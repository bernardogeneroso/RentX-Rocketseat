import { Router } from "express";
import * as Yup from "yup";

import CarsAppointmentsController from "../../controllers/CarsAppointmentsController";
import { schemaValidation } from "@shared/infra/http/middlewares/schemaValidation";

const appointmentsRouter = Router();

const carsAppointmentsController = new CarsAppointmentsController();

appointmentsRouter.post(
  "/",
  schemaValidation({
    schema: Yup.object({
      carId: Yup.string().length(6).required(),
      start_in: Yup.date().required(),
      end_in: Yup.date().required(),
    }),
  }),

  carsAppointmentsController.create
);

export default appointmentsRouter;
