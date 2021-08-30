import { injectable, inject } from "tsyringe";
import { Users as User } from "@prisma/client";
import { sign } from "jsonwebtoken";

import UsersRepository from "../infra/prisma/repositories/UsersRepository";
import IUsersRepository from "../repositories/IUsersRepository";
import IHashProvider from "../providers/HashProvider/models/IHashProvider";
import authConfig from "@config/auth";
import AppError from "@shared/errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: Omit<User, "password">;
  token: string;
}

@injectable()
class AuthenticateUserService {
  private usersRepository: IUsersRepository;

  constructor(@inject("HashProvider") private hashProvider: IHashProvider) {
    this.usersRepository = new UsersRepository();
  }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const userFind = await this.usersRepository.findByEmail(email);

    if (!userFind)
      throw new AppError("Incorrect email or password combination", 401);

    const isPasswordMatch = await this.hashProvider.compareHash(
      password,
      userFind.password
    );

    if (!isPasswordMatch)
      throw new AppError("Incorrect email or password combination", 401);

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, { subject: userFind.id, expiresIn });

    return { user: userFind, token };
  }
}

export default AuthenticateUserService;
