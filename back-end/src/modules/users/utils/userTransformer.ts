import { Users as User } from "@prisma/client";
import AppError from "@shared/errors/AppError";

export function userTransformer(users: User[] | User | any): any {
  const staticUrl = "/users/avatar/image/";

  try {
    if (users instanceof Array)
      return users.map((user: User) => {
        if (user.password) {
          // @ts-ignore
          delete user.password;
        }

        return {
          ...user,
          avatarUrl: user.avatar
            ? process.env.APP_API_URL
              ? process.env.APP_API_URL + staticUrl + user.avatar
              : null
            : null,
        };
      });

    if (users.password) {
      // @ts-ignore
      delete users.password;
    }

    return {
      ...users,
      avatarUrl: users.avatar
        ? process.env.APP_API_URL
          ? process.env.APP_API_URL + staticUrl + users.avatar
          : null
        : null,
    };
  } catch (err) {
    throw new AppError("Error on transform user/users");
  }
}
