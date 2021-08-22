import express from "express";

import usersRoutes from "@modules/users/infra/http/routes/users.routes";
import carsRoutes from "@modules/cars/infra/http/routes/cars.routes";
import ensureAuthenticated from "@modules/users/infra/http/middlewares/ensureAuthenticated";

const routes = express.Router();

routes.use("/users", usersRoutes);
routes.use("/cars", ensureAuthenticated, carsRoutes);

export default routes;
