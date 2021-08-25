import { injectable, inject } from "tsyringe";
import path from "path";

import { IUsersModelCreate } from "../infra/prisma/model/UsersModelCreate";
import UsersRepository from "../infra/prisma/repositories/UsersRepository";
import IMailProvider from "@shared/container/providers/MailProvider/models/IMailProvider";
import IUsersRepository from "../repositories/IUsersRepository";
import IHashProvider from "../providers/HashProvider/models/IHashProvider";
import AppError from "@shared/errors/AppError";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  private usersRepository: IUsersRepository;

  constructor(
    @inject("HashProvider") private hashProvider: IHashProvider,
    @inject("MailProvider") private mailProvider: IMailProvider
  ) {
    this.usersRepository = new UsersRepository();
  }

  async execute({
    name,
    email,
    password,
  }: IRequest): Promise<IUsersModelCreate | null> {
    const isAlreadyRegistered = await this.usersRepository.findByEmail(email);

    if (isAlreadyRegistered) throw new AppError("Email address already used.");

    const hashedPass = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPass,
    });

    /*// Send email
    const mailTemplate = path.resolve(
      __dirname,
      "..",
      "views",
      "account_created.hbs"
    );

    await this.mailProvider.sendMail({
      to: { name: user.name, email: user.email },
      subject: "[RenteX] Welcome to RenteX!",
      templateData: {
        file: mailTemplate,
        variables: {
          name: user.name,
        },
      },
    });*/

    return user;
  }
}

export default CreateUserService;
