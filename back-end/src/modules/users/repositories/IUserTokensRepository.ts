import { UsersTokens as UserToken } from "@prisma/client";

interface IUserTokensRepository {
  generate(user_id: string, token: string): Promise<UserToken>;
  findByToken(token: string): Promise<UserToken | null>;
}

export default IUserTokensRepository;
