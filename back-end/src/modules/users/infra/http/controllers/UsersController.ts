import { Request, Response } from "express";
import { container } from "tsyringe";

import { userTransformer } from "../../../utils/userTransformer";
import CreateUserService from "../../../services/CreateUserService";
import UpdateUserAvatarService from "../../../services/UpdateUserAvatarService";
import AuthenticateUpdateUserService from "../../../services/AuthenticateUpdateUserService";
import AppError from "@shared/errors/AppError";

class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    return response.json(userTransformer(user));
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    const { id: userId } = request.user;

    const authenticateUpdateUserService = container.resolve(
      AuthenticateUpdateUserService
    );

    const user = await authenticateUpdateUserService.execute({
      userId,
      name,
      email,
    });

    return response.json(userTransformer(user));
  }

  async updateAvatar(request: Request, response: Response): Promise<Response> {
    const avatar = request.file?.filename;

    if (!avatar) throw new AppError("Avatar file is required!");

    const { id: userId } = request.user;

    const updateUserAvatarService = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatarService.execute({
      userId,
      avatar,
    });

    return response.json(userTransformer(user));
  }
}

export default UsersController;
