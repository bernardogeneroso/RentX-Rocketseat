import { Users as User } from ".prisma/client";
import { injectable, inject } from "tsyringe";

import UsersRepository from "../infra/prisma/repositories/UsersRepository";
import IUsersRepository from "@modules/users/repositories/IUsersRepository";
import IStorageProvider from "@shared/container/providers/StorageProvider/models/IStorageProvider";
import AppError from "@shared/errors/AppError";

interface IRequest {
  userId: string;
  avatar: string;
}

@injectable()
class UpdateUserAvatarService {
  private usersRepository: IUsersRepository;

  constructor(
    @inject("StorageProvider") private storageProvider: IStorageProvider
  ) {
    this.usersRepository = new UsersRepository();
  }

  async execute({ userId, avatar }: IRequest): Promise<User | null> {
    const user = await this.usersRepository.findById(userId);

    if (!user) throw new AppError("Error on update avatar", 401);

    if (user.avatar) {
      await this.storageProvider.deleteFile({
        file: user.avatar,
        options: "avatars",
      });
    }

    const fileName = await this.storageProvider.saveFile({
      file: avatar,
      options: "avatars",
    });

    // @ts-ignore
    delete user.users_tag;

    user.avatar = fileName;
    await this.usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
