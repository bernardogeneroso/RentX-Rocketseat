import { Router } from "express";
import multer from "multer";
import * as Yup from "yup";

import CarsController from "../controllers/CarsController";
import CarsBetweenDatesController from "../controllers/CarsBetweenDatesController";
import appointmentsRouter from "./sub.routes/appointments.routes";
import { schemaValidation } from "@shared/infra/http/middlewares/schemaValidation";
import uploadConfig from "../../../../../config/upload";

const carsRouter = Router();
const upload = multer(uploadConfig.multer.storageCars);

const carsController = new CarsController();
const carsBetweenDatesController = new CarsBetweenDatesController();

carsRouter.use("/appointments", appointmentsRouter);

carsRouter.get(
  "/",
  schemaValidation({
    schema: Yup.object({
      search: Yup.string(),
    }),
    segments: "query",
  }),
  carsController.allCars
);
carsRouter.get(
  "/between-dates",
  schemaValidation({
    schema: Yup.object({
      dates: Yup.object({
        startDate: Yup.date().required(),
        endDate: Yup.date().required(),
      }).required(),
      filter: Yup.object({
        pricesPerDay: Yup.object({
          startPricePerDay: Yup.number().required(),
          endPricePerDay: Yup.number().required(),
        }).required(),
        fuel: Yup.mixed<"gasoline" | "electric" | "alcohol">()
          .oneOf(["gasoline", "electric", "alcohol"])
          .required(),
        transmission: Yup.mixed<"auto" | "manual">()
          .oneOf(["auto", "manual"])
          .required(),
      }).default(undefined),
    }),
  }),
  carsBetweenDatesController.index
);
carsRouter.get("/schedules", carsController.userSchedules);
carsRouter.get("/favourite", carsController.favouriteCar);
carsRouter.get(
  "/details/:plate",
  schemaValidation({
    schema: Yup.object({
      plate: Yup.string().length(6).required(),
    }),
    segments: "params",
  }),
  carsController.carDetails
);

carsRouter.post(
  "/",
  schemaValidation({
    schema: Yup.object({
      plate: Yup.string().length(6).required(),
      brand: Yup.string().required(),
      model: Yup.string().required(),
      colour: Yup.string().required(),
      fuel: Yup.mixed<"gasoline" | "electric" | "alcohol">()
        .oneOf(["gasoline", "electric", "alcohol"])
        .required(),
      transmission: Yup.mixed<"auto" | "manual">()
        .oneOf(["auto", "manual"])
        .required(),
      pricePerDay: Yup.number().required(),
      carDetail: Yup.object({
        maxSpeed: Yup.number().required(),
        topSpeed: Yup.number().required(),
        hp: Yup.number().required(),
        people: Yup.number().required(),
      }).required(),
    }),
  }),

  carsController.create
);

carsRouter.post(
  "/images",
  upload.single("image"),
  schemaValidation({
    schema: Yup.object({
      carId: Yup.string().length(6).required(),
      oldUrl: Yup.string(),
    }),
  }),
  carsController.updateImages
);

export default carsRouter;
