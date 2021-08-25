import { injectable, inject } from "tsyringe";

import UsersRepository from "../infra/prisma/repositories/UsersRepository";
import IUsersRepository from "../repositories/IUsersRepository";
import IHashProvider from "../providers/HashProvider/models/IHashProvider";
import AppError from "@shared/errors/AppError";

interface IRequest {
  userId: string;
  actual_password: string;
  password: string;
}

@injectable()
class AuthenticateResetPasswordService {
  private usersRepository: IUsersRepository;

  constructor(@inject("HashProvider") private hashProvider: IHashProvider) {
    this.usersRepository = new UsersRepository();
  }

  async execute({
    userId,
    actual_password,
    password,
  }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(userId);
    if (!user) throw new AppError("Error on reset password");

    const passwordConfirmation = await this.hashProvider.compareHash(
      actual_password,
      user.password
    );

    if (!passwordConfirmation) throw new AppError("Error on reset password");

    user.password = await this.hashProvider.generateHash(password);
    await this.usersRepository.save(user);
  }
}

export default AuthenticateResetPasswordService;
