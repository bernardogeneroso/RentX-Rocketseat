import { Router } from "express";
import * as Yup from "yup";

import SessionsController from "../../controllers/SessionsController";
import { schemaValidation } from "@shared/infra/http/middlewares/schemaValidation";

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post(
  "/refresh-token",
  schemaValidation({
    schema: Yup.object({
      refresh_token: Yup.string().uuid().required(),
    }),
  }),
  sessionsController.refreshToken
);

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
