import { Router } from "express";
import multer from "multer";
import { celebrate, Segments, Joi } from "celebrate";

import uploadConfig from "@config/upload";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import UsersController from "../controllers/UsersController";
import sessionsRouter from "./sub.routes/sessions.routes";

const usersRouter = Router();
const upload = multer(uploadConfig.multer.storageAvatars);

usersRouter.use("/session", sessionsRouter);

const usersController = new UsersController();

usersRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      username: Joi.string().required(),
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

export default usersRouter;
