import fs from "fs";
import path from "path";
import uploadConfig from "@config/upload";

import IStorageProvider, { File } from "../models/IStorageProvider";

const uploadsFolder = {
  avatars: uploadConfig.uploads.uploadsFolderUsersAvatars,
  carImages: uploadConfig.uploads.uploadsFolderCarsImages,
  rest: uploadConfig.uploads.tmpFolder,
};

class DiskStorageProvider implements IStorageProvider {
  public async saveFile({ file, options }: File): Promise<string> {
    await fs.promises.rename(
      path.resolve(uploadConfig.uploads.tmpFolder, file),
      path.resolve(uploadsFolder[options], file)
    );

    return file;
  }

  public async deleteFile({ file, options }: File): Promise<void> {
    const filePath = path.resolve(uploadsFolder[options], file);

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

export default DiskStorageProvider;
