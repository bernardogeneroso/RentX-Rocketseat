import { Router } from "express";
import * as Yup from "yup";

import SessionsController from "../../controllers/SessionsController";
import ensureAuthenticated from "../../middlewares/ensureAuthenticated";
import { schemaValidation } from "@shared/infra/http/middlewares/schemaValidation";

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.get("/validate", ensureAuthenticated, function (req, res) {
  res.send();
});

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
