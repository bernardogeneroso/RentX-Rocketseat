import { getUnixTime, addSeconds } from "date-fns";

import RefreshTokensRepository from "@modules/users/infra/prisma/repositories/RefreshTokensRepository";
import IRefreshTokensRepository from "@modules/users/repositories/IRefreshTokensRepository";

class GenerateRefreshTokenProvider {
  private refreshTokensRepository: IRefreshTokensRepository;

  constructor() {
    this.refreshTokensRepository = new RefreshTokensRepository();
  }

  async execute(userId: string) {
    await this.refreshTokensRepository.remove(userId);

    const expiresIn = getUnixTime(addSeconds(new Date(), 20));

    const generateRefreshToken = await this.refreshTokensRepository.create({
      userId,
      expiresIn,
    });

    return generateRefreshToken;
  }
}

export default GenerateRefreshTokenProvider;
