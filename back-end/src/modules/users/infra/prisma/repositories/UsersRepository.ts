import { Users as User } from ".prisma/client";

import ICreateUserDTO from "@modules/users/dtos/ICreateUserDTO";
import IUsersRepository from "@modules/users/repositories/IUsersRepository";

import { prisma } from "@shared/services/prisma";

class UsersRepository implements IUsersRepository {
  async findById(id: string): Promise<User | null> {
    return await prisma.users.findUnique({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await prisma.users.findUnique({
      where: {
        email,
      },
    });
  }

  async create(data: ICreateUserDTO): Promise<ICreateUserDTO> {
    return await prisma.users.create({
      data,
    });
  }

  async save({ id, ...data }: User): Promise<void> {
    await prisma.users.update({
      data,
      where: {
        id,
      },
    });
  }
}

export default UsersRepository;
