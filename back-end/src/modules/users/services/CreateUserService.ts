import { injectable, inject } from "tsyringe";

import UsersRepository from "../infra/prisma/repositories/UsersRepository";
import IUsersRepository from "../repositories/IUsersRepository";
import IHashProvider from "../providers/HashProvider/models/IHashProvider";
import ICreateUserDTO from "../dtos/ICreateUserDTO";
import AppError from "@shared/errors/AppError";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  private usersRepository: IUsersRepository;

  constructor(@inject("HashProvider") private hashProvider: IHashProvider) {
    this.usersRepository = new UsersRepository();
  }

  public async execute({
    name,
    email,
    password,
  }: IRequest): Promise<ICreateUserDTO | null> {
    const isAlreadyRegistered = await this.usersRepository.findByEmail(email);

    if (isAlreadyRegistered) throw new AppError("Email address already used.");

    const hashedPass = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPass,
    });

    return user;
  }
}

export default CreateUserService;
