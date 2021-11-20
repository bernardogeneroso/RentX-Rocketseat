import { Request, Response } from "express";
import { container } from "tsyringe";

import { userTransformer } from "@modules/users/utils/userTransformer";
import AuthenticateUserService from "../../../services/AuthenticateUserService";
import RefreshTokenUserService from "@modules/users/services/RefreshTokenUserService";

class SessionsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserService = container.resolve(AuthenticateUserService);

    const { user, token, refreshToken } = await authenticateUserService.execute(
      {
        email,
        password,
      }
    );

    return response.json({ user: userTransformer(user), token, refreshToken });
  }

  async refreshToken(request: Request, response: Response): Promise<Response> {
    const { refresh_token } = request.body;

    const refreshTokenUserService = new RefreshTokenUserService();

    const token = await refreshTokenUserService.execute(refresh_token);

    return response.json(token);
  }
}

export default SessionsController;
