import RefreshTokensRepository from "../infra/prisma/repositories/RefreshTokensRepository";
import GenerateTokenProvider from "../providers/Token/GenerateTokenProvider";
import IRefreshTokensRepository from "../repositories/IRefreshTokensRepository";
import AppError from "@shared/errors/AppError";

interface IResponse {
  token: string;
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

    return { token };
  }
}
export default RefreshTokenUserService;
