import { Router } from "express";
import * as Yup from "yup";

import SessionsController from "../../controllers/SessionsController";
import { schemaValidation } from "@shared/infra/http/middlewares/schemaValidation";

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.get("/validate");

sessionsRouter.post(
  "/",
  schemaValidation({
    schema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
  }),
  sessionsController.create
);

export default sessionsRouter;
