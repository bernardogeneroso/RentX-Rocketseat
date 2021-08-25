import { Request, Response } from "express";
import { container } from "tsyringe";

import ResetPasswordService from "../../../services/ResetPasswordService";
import AuthenticateResetPasswordService from "../../../services/AuthenticateResetPasswordService";

class ResetPasswordController {
  async create(request: Request, response: Response): Promise<Response> {
    const { token, password } = request.body;

    const resetPasswordService = container.resolve(ResetPasswordService);

    await resetPasswordService.execute({ token, password });

    return response.status(204).json();
  }

  async resetPasswordAuthenticated(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { actual_password, password } = request.body;
    const { id: userId } = request.user;

    const authenticateResetPasswordService = container.resolve(
      AuthenticateResetPasswordService
    );

    await authenticateResetPasswordService.execute({
      userId,
      actual_password,
      password,
    });

    return response.status(204).json();
  }
}

export default ResetPasswordController;
