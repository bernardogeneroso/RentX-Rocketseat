import { injectable, inject } from "tsyringe";
import { differenceInMinutes } from "date-fns";

import UsersRepository from "../infra/prisma/repositories/UsersRepository";
import UserTokensRepository from "../infra/prisma/repositories/UserTokensRepository";
import IUsersRepository from "../repositories/IUsersRepository";
import IUserTokensRepository from "../repositories/IUserTokensRepository";
import IHashProvider from "../providers/HashProvider/models/IHashProvider";
import AppError from "@shared/errors/AppError";

interface IRequest {
  token: string;
  password: string;
}

@injectable()
class ResetPasswordService {
  private usersRepository: IUsersRepository;
  private userTokensRepository: IUserTokensRepository;

  constructor(@inject("HashProvider") private hashProvider: IHashProvider) {
    this.usersRepository = new UsersRepository();
    this.userTokensRepository = new UserTokensRepository();
  }

  async execute({ token, password }: IRequest): Promise<void> {
    const userToken = await this.userTokensRepository.findByToken(token);
    if (!userToken) throw new AppError("Token not found");

    const user = await this.usersRepository.findById(userToken.user_id);
    if (!user) throw new AppError("User not found");

    const tokenCreatedAt = userToken.created_at;
    const now = new Date(Date.now());

    const hasTokenExpired = differenceInMinutes(now, tokenCreatedAt) > 30;
    if (hasTokenExpired) throw new AppError("Token has expired");

    user.password = await this.hashProvider.generateHash(password);
    await this.usersRepository.save(user);
  }
}

export default ResetPasswordService;
