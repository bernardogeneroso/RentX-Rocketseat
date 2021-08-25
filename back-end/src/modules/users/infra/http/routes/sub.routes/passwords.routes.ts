import { schemaValidation } from "@shared/infra/http/middlewares/schemaValidation";
import { Router } from "express";
import * as Yup from "yup";

import ForgotPasswordController from "../../controllers/ForgotPasswordController";
import ResetPasswordController from "../../controllers/ResetPasswordController";
import ensureAuthenticated from "../../middlewares/ensureAuthenticated";

const passwordsRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

passwordsRouter.post(
  "/forgot/:email",
  schemaValidation({
    schema: Yup.object({
      email: Yup.string().email().required(),
    }),
  }),
  forgotPasswordController.create
);
passwordsRouter.post(
  "/reset",
  schemaValidation({
    schema: Yup.object({
      token: Yup.string().uuid().required(),
      password: Yup.string().required(),
      password_confirmation: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required(),
    }),
  }),
  resetPasswordController.create
);
passwordsRouter.put(
  "/reset-authenticated",
  ensureAuthenticated,
  schemaValidation({
    schema: Yup.object({
      actual_password: Yup.string().required(),
      password: Yup.string().required(),
      password_confirmation: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required(),
    }),
  }),
  resetPasswordController.resetPasswordAuthenticated
);

export default passwordsRouter;
