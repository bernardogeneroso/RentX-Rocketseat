import { Users as User } from "@prisma/client";

import ICreateUserDTO from "../dtos/ICreateUserDTO";
import { IUsersModelCreate } from "../infra/prisma/model/UsersModelCreate";

interface IUsersRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(data: ICreateUserDTO): Promise<IUsersModelCreate>;
  save(data: User): Promise<void>;
}

export default IUsersRepository;
