import { PrismaClient } from "@prisma/client";
import AppError from "@shared/errors/AppError";

export const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "event",
      level: "error",
    },
    {
      emit: "stdout",
      level: "info",
    },
    {
      emit: "event",
      level: "warn",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log("Query: " + e.query);
  console.log("Duration: " + e.duration + "ms");
});

prisma.$on("error", (e) => {
  console.log("aqui");

  throw new AppError(`Internal server error -> ${e.message}`, 500);
});

prisma.$on("warn", (e) => {
  console.log("aqui");

  throw new AppError(`Internal server error -> ${e.message}`, 500);
});
