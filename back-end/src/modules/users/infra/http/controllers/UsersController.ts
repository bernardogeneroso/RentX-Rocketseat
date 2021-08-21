import { Request, Response } from "express";
import { container } from "tsyringe";

import { userTransformer } from "@modules/users/utils/userTransformer";
import CreateUserService from "../../../services/CreateUserService";
import UpdateUserAvatarService from "../../../services/UpdateUserAvatarService";
import AppError from "@shared/errors/AppError";

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  }

  public async updateAvatar(
    request: Request,
    response: Response
  ): Promise<Response> {
    const avatar = request.file?.filename;

    if (!avatar) {
      throw new AppError("Avatar file is required!");
    }

    const { id: user_id } = request.user;

    const updateUserAvatarService = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatarService.execute({
      user_id,
      avatar,
    });

    return response.json(userTransformer(user));
  }
}

export default UsersController;
