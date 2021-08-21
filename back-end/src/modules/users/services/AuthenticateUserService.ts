import { injectable, inject } from "tsyringe";
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

interface UserAuth {
  email: string;
  password: string;
}

interface IResponse {
  user: UserAuth;
  token: string;
}

@injectable()
class AuthenticateUserService {
  private usersRepository: IUsersRepository;

  constructor(@inject("HashProvider") private hashProvider: IHashProvider) {
    this.usersRepository = new UsersRepository();
  }

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user)
      throw new AppError("Incorrect email or password combination", 401);

    const isPasswordMatch = await this.hashProvider.compareHash(
      password,
      user.password
    );

    if (!isPasswordMatch)
      throw new AppError("Incorrect email or password combination", 401);

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, { subject: user.id, expiresIn });

    return { user, token };
  }
}

export default AuthenticateUserService;
