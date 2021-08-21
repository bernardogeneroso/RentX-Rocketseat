import { PrismaClient, UsersTokens as UserToken } from "@prisma/client";

import IUserTokensRepository from "../../../repositories/IUserTokensRepository";

const prisma = new PrismaClient();

class UserTokensRepository implements IUserTokensRepository {
  public async generate(user_id: string, token: string): Promise<UserToken> {
    return await prisma.usersTokens.create({
      data: {
        user_id,
        token,
      },
    });
  }

  public async findByToken(token: string): Promise<UserToken | null> {
    return await prisma.usersTokens.findFirst({
      where: {
        token,
      },
    });
  }
}

export default UserTokensRepository;
