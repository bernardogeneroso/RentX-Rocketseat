import { RefreshTokens as RefreshToken } from "@prisma/client";

import { ICreateRefreshTokenDTO } from "../dtos/ICreateRefreshTokenDTO";

interface IRefreshTokensRepository {
  create(data: ICreateRefreshTokenDTO): Promise<RefreshToken>;
  remove(userId: string): Promise<void>;
  removeAll(userId: string): Promise<void>;
  verify(id: string): Promise<RefreshToken | null>;
}

export default IRefreshTokensRepository;
