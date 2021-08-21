import path from "path";
import crypto from "crypto";
import multer, { StorageEngine, FileFilterCallback } from "multer";
import AppError from "@shared/errors/AppError";
import { Request } from "express";

const tmpFolder = path.resolve(__dirname, "..", "..", "tmp");
const maxSizeAvatar = 2 * 1024 * 1024; // for 2MB

interface MulterLimitsFileSize {
  fileSize: number;
}

interface IUploadConfig {
  driver: "disk";

  uploads: {
    tmpFolder: string;
    uploadsFolderUsersAvatars: string;
  };

  multer: {
    storageAvatars: {
      storage: StorageEngine;
      fileFilter: any;
      limits: MulterLimitsFileSize;
    };
  };

  config: {
    disk: {};
  };
}

export default {
  driver: "disk",

  uploads: {
    tmpFolder,
    uploadsFolderUsersAvatars: path.resolve(tmpFolder, "users", "avatars"),
  },

  multer: {
    storageAvatars: {
      storage: multer.diskStorage({
        destination: path.resolve(tmpFolder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(10).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`;

          return callback(null, fileName);
        },
      }),
      fileFilter: (
        request: Request,
        file: Express.Multer.File,
        cb: FileFilterCallback
      ) => {
        if (
          file.mimetype == "image/png" ||
          file.mimetype == "image/jpg" ||
          file.mimetype == "image/jpeg"
        ) {
          cb(null, true);
        } else {
          cb(null, false);
          // @ts-ignore
          return cb(new AppError("Only .png, .jpg and .jpeg format allowed!"));
        }
      },
      limits: { fileSize: maxSizeAvatar },
    },
  },

  config: {
    disk: {},
  },
} as IUploadConfig;
