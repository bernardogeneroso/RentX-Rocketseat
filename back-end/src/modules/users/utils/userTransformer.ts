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
          avatar_url: process.env.APP_API_URL
            ? user.avatar
              ? process.env.APP_API_URL + staticUrl + user.avatar
              : process.env.APP_API_URL + staticUrl + "avatar.png"
            : null,
        };
      });

    if (users.password) {
      // @ts-ignore
      delete users.password;
    }

    return {
      ...users,
      avatar_url: process.env.APP_API_URL
        ? users.avatar
          ? process.env.APP_API_URL + staticUrl + users.avatar
          : process.env.APP_API_URL + staticUrl + "avatar.png"
        : null,
    };
  } catch (err) {
    throw new AppError("Error on transform user/users");
  }
}
