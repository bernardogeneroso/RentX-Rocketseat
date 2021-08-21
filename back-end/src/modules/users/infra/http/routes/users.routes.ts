import express, { Router } from "express";
import path from "path";
import multer from "multer";
import { celebrate, Segments, Joi } from "celebrate";

import uploadConfig from "@config/upload";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import UsersController from "../controllers/UsersController";
import sessionsRouter from "./sub.routes/sessions.routes";
import passwordsRouter from "./sub.routes/passwords.routes";

const usersRouter = Router();
const upload = multer(uploadConfig.multer.storageAvatars);

usersRouter.use("/session", sessionsRouter);
usersRouter.use("/passwords", passwordsRouter);

const usersController = new UsersController();

usersRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
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
  express.static(
    path.resolve(uploadConfig.uploads.tmpFolder, "users", "avatars")
  )
);

export default usersRouter;
