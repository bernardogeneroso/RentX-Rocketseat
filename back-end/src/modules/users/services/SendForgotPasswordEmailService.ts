import { injectable, inject } from "tsyringe";
import { v4 as uuid } from "uuid";
import path from "path";

import UsersRepository from "../infra/prisma/repositories/UsersRepository";
import IUsersRepository from "../repositories/IUsersRepository";
import UserTokensRepository from "../infra/prisma/repositories/UserTokensRepository";
import IUserTokensRepository from "../repositories/IUserTokensRepository";
import IMailProvider from "@shared/container/providers/MailProvider/models/IMailProvider";
import AppError from "@shared/errors/AppError";

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  private usersRepository: IUsersRepository;
  private userTokensRepository: IUserTokensRepository;

  constructor(@inject("MailProvider") private mailProvider: IMailProvider) {
    this.usersRepository = new UsersRepository();
    this.userTokensRepository = new UserTokensRepository();
  }

  async execute({ email }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) throw new AppError("User not found");

    const { token } = await this.userTokensRepository.generate(user.id, uuid());
    const mailTemplate = path.resolve(
      __dirname,
      "..",
      "views",
      "forgot_password.hbs"
    );

    await this.mailProvider.sendMail({
      to: { name: user.name, email: user.email },
      subject: "[RenteX] Reset your password",
      templateData: {
        file: mailTemplate,
        variables: {
          name: user.name,
          token: token,
        },
      },
    });
  }
}

export default SendForgotPasswordEmailService;
