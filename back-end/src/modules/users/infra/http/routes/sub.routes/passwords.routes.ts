import { schemaValidation } from "@shared/infra/http/middlewares/schemaValidation";
import { Router } from "express";
import * as Yup from "yup";

import ForgotPasswordController from "../../controllers/ForgotPasswordController";
import ResetPasswordController from "../../controllers/ResetPasswordController";

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

export default passwordsRouter;
