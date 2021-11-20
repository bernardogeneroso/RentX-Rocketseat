import { prisma } from "@shared/services/prisma";

import IRefreshTokensRepository from "@modules/users/repositories/IRefreshTokensRepository";
import { ICreateRefreshTokenDTO } from "@modules/users/dtos/ICreateRefreshTokenDTO";
import { RefreshTokens as RefreshToken } from "@prisma/client";

class RefreshTokensRepository implements IRefreshTokensRepository {
  async create(data: ICreateRefreshTokenDTO): Promise<RefreshToken> {
    return await prisma.refreshTokens.create({
      data,
    });
  }

  async remove(userId: string): Promise<void> {
    await prisma.refreshTokens.delete({
      where: { userId },
    });
  }

  async verify(id: string): Promise<RefreshToken | null> {
    return await prisma.refreshTokens.findFirst({
      where: { id },
    });
  }
}

export default RefreshTokensRepository;
