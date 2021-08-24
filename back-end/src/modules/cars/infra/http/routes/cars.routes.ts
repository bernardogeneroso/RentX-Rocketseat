import { Router } from "express";
import { celebrate, Segments, errors, Joi } from "celebrate";

import CarsController from "../controllers/CarsController";
import CarsBetweenDatesController from "../controllers/CarsBetweenDatesController";
import appointmentsRouter from "./sub.routes/appointments.routes";

const carsRouter = Router();

const carsController = new CarsController();
const carsBetweenDatesController = new CarsBetweenDatesController();

// TODO: Celebrate with Joi, don't give error

carsRouter.use("/appointments", appointmentsRouter);

carsRouter.get(
  "/",
  celebrate({
    [Segments.QUERY]: {
      search: Joi.string(),
    },
  }),
  carsController.allCars
);
carsRouter.get(
  "/between-dates",
  celebrate({
    [Segments.BODY]: {
      startDate: Joi.date().required(),
      endDate: Joi.date().required(),
      /*dates: Joi.object({
        startDate: Joi.date().required(),
        endDate: Joi.date().required(),
      }).required(),*/
      /*filter: Joi.object({
        pricesPerDay: Joi.object({
          startPricePerDay: Joi.number().required(),
          endPricePerDay: Joi.number().required(),
        }).required(),
        fuel: Joi.string().valid("gasoline", "electric", "alcohol").required(),
        transmission: Joi.string().valid("auto", "manual").required(),
      }),*/
    },
  }),
  carsBetweenDatesController.index
);
carsRouter.get("/schedules", carsController.userSchedules);
carsRouter.get("/favourite", carsController.favouriteCar);
carsRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      plate: Joi.string().length(6).required(),
      brand: Joi.string().required(),
      model: Joi.string().required(),
      colour: Joi.string().required(),
      fuel: Joi.string().valid("gasoline", "electric", "alcohol").required(),
      transmission: Joi.string().valid("auto", "manual").required(),
      pricePerDay: Joi.number().required(),
      carDetail: Joi.object({
        maxSpeed: Joi.number().required(),
        topSpeed: Joi.number().required(),
        hp: Joi.number().required(),
        people: Joi.number().required(),
      }).required(),
    },
  }),
  carsController.create
);

carsRouter.use(errors());

export default carsRouter;
