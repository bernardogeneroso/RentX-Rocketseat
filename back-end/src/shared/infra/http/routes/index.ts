import express from "express";
import path from "path";

import usersRoutes from "@modules/users/infra/http/routes/users.routes";
import carsRoutes from "@modules/cars/infra/http/routes/cars.routes";
import uploadConfig from "@config/upload";

const routes = express.Router();

routes.use("/users", usersRoutes);
routes.use("/cars", carsRoutes);

routes.use(
  "/users/avatar/image",
  express.static(
    path.resolve(uploadConfig.uploads.tmpFolder, "users", "avatars")
  )
);
routes.use(
  "/cars/image",
  express.static(path.resolve(uploadConfig.uploads.tmpFolder, "cars", "images"))
);

export default routes;
