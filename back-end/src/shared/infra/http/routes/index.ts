import express from "express";

import usersRoutes from "@modules/users/infra/http/routes/users.routes";

const routes = express.Router();

routes.use("/users", usersRoutes);

export default routes;
