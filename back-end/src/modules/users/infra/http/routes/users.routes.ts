import express, { Router } from "express";
import path from "path";
import multer from "multer";
import * as Yup from "yup";

import uploadConfig from "@config/upload";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import UsersController from "../controllers/UsersController";
import sessionsRouter from "./sub.routes/sessions.routes";
import passwordsRouter from "./sub.routes/passwords.routes";
import { schemaValidation } from "@shared/infra/http/middlewares/schemaValidation";

const usersRouter = Router();
const upload = multer(uploadConfig.multer.storageAvatars);

usersRouter.use("/session", sessionsRouter);
usersRouter.use("/passwords", passwordsRouter);

const usersController = new UsersController();

usersRouter.post(
  "/",
  schemaValidation({
    schema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
  }),
  usersController.create
);

usersRouter.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  usersController.updateAvatar
);

usersRouter.use(
  "/avatar/image",
  ensureAuthenticated,
  express.static(
    path.resolve(uploadConfig.uploads.tmpFolder, "users", "avatars")
  )
);

export default usersRouter;
