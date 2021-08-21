import { Prisma } from "@prisma/client"

export const UsersModelCreate = Prisma.validator<Prisma.UsersSelect>()({
  name: true,
  email: true,
  created_at: true,
})

export type IUsersModelCreate = {
  name: string,
  email: string,
  created_at: Date
}