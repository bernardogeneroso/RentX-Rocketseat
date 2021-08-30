import { Users as User } from "@prisma/client";

import UsersRepository from "../infra/prisma/repositories/UsersRepository";
import IUsersRepository from "../repositories/IUsersRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
  userId: string;
  name: string;
  email: string;
}

class AuthenticateUpdateUserService {
  private usersRepository: IUsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async execute({ userId, name, email }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(userId);
    if (!user) throw new AppError("Error on update user");

    user.name = name;
    user.email = email;

    await this.usersRepository.save(user);

    return user;
  }
}

export default AuthenticateUpdateUserService;
