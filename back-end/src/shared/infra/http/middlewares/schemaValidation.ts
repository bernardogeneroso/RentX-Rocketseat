import { Request, Response, NextFunction } from "express";
import { AnyObjectSchema } from "yup";

import AppError from "@shared/errors/AppError";

interface SchemaValidationProps {
  schema: AnyObjectSchema;
  segments?: "body" | "query";
}

export const schemaValidation =
  ({ schema, segments = "body" }: SchemaValidationProps) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const segment = segments === "body" ? req.body : req.query;

    try {
      await schema.validate(segment);

      return next();
    } catch (err) {
      throw new AppError(err);
    }
  };
