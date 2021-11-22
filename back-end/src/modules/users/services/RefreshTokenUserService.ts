import { isAfter, fromUnixTime } from "date-fns";
import { RefreshTokens as RefreshToken } from "@prisma/client";

import RefreshTokensRepository from "../infra/prisma/repositories/RefreshTokensRepository";
import GenerateTokenProvider from "../providers/Token/GenerateTokenProvider";
import IRefreshTokensRepository from "../repositories/IRefreshTokensRepository";
import GenerateRefreshTokenProvider from "../providers/Token/GenerateRefreshTokenProvider";
import AppError from "@shared/errors/AppError";

interface IResponse {
  token: string;
  refreshToken?: RefreshToken;
}

class RefreshTokenUserService {
  private refreshTokensRepository: IRefreshTokensRepository;

  constructor() {
    this.refreshTokensRepository = new RefreshTokensRepository();
  }

  async execute(refresh_token: string): Promise<IResponse> {
    const refreshToken = await this.refreshTokensRepository.verify(
      refresh_token
    );

    if (!refreshToken) throw new AppError("Refresh token invalid");

    const generateTokenProvider = new GenerateTokenProvider();
    const token = generateTokenProvider.execute(refreshToken.userId);

    const refreshTokenExpired = isAfter(
      fromUnixTime(refreshToken.expiresIn),
      new Date()
    );

    if (refreshTokenExpired) {
      await this.refreshTokensRepository.removeAll(refreshToken.id);

      const generateRefreshTokenProvider = new GenerateRefreshTokenProvider();
      const newRefreshToken = await generateRefreshTokenProvider.execute(
        refreshToken.userId
      );

      return {
        token,
        refreshToken: newRefreshToken,
      };
    }

    return { token };
  }
}
export default RefreshTokenUserService;
