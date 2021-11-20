import { injectable, inject } from "tsyringe";
import { RefreshTokens, Users as User } from "@prisma/client";

import UsersRepository from "../infra/prisma/repositories/UsersRepository";
import IUsersRepository from "../repositories/IUsersRepository";
import IHashProvider from "../providers/HashProvider/models/IHashProvider";
import GenerateRefreshTokenProvider from "../providers/Token/GenerateRefreshTokenProvider";
import GenerateTokenProvider from "../providers/Token/GenerateTokenProvider";
import AppError from "@shared/errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: Omit<User, "password">;
  token: string;
  refreshToken: RefreshTokens;
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

    const generateTokenProvider = new GenerateTokenProvider();
    const token = generateTokenProvider.execute(userFind.id);

    const generateRefreshTokenProvider = new GenerateRefreshTokenProvider();
    const refreshToken = await generateRefreshTokenProvider.execute(
      userFind.id
    );

    return { user: userFind, token, refreshToken };
  }
}

export default AuthenticateUserService;
