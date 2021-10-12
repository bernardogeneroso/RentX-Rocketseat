import "reflect-metadata";
import "dotenv/config";
import "express-async-errors";

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import AppError from "../../errors/AppError";
import Routers from "./routes";

import "../../container";

const app = express();

app.use(cors());
app.use(express.json());
app.use(Routers);

app.use(
  (error: Error, request: Request, response: Response, _next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).send({
        status: "error",
        message: error.message,
      });
    }

    if (error.message === "File too large") {
      return response.status(400).send({
        status: "error",
        message: "Maximum file size is 10MB",
      });
    }

    return response.status(500).send({
      status: "error",
      message: "Internal server error",
    });
  }
);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
});
