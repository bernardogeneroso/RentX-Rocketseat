import { getUnixTime, addWeeks } from "date-fns";

import RefreshTokensRepository from "@modules/users/infra/prisma/repositories/RefreshTokensRepository";
import IRefreshTokensRepository from "@modules/users/repositories/IRefreshTokensRepository";

class GenerateRefreshTokenProvider {
  private refreshTokensRepository: IRefreshTokensRepository;

  constructor() {
    this.refreshTokensRepository = new RefreshTokensRepository();
  }

  async execute(userId: string) {
    await this.refreshTokensRepository.removeAll(userId);

    const expiresIn = getUnixTime(addWeeks(new Date(), 1));

    const generateRefreshToken = await this.refreshTokensRepository.create({
      userId,
      expiresIn,
    });

    return generateRefreshToken;
  }
}

export default GenerateRefreshTokenProvider;
