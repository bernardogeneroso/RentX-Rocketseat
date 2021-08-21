export interface File {
  file: string;
  options: "avatars";
}

interface IStorageProvider {
  saveFile(data: File): Promise<string>;
  deleteFile(data: File): Promise<void>;
}

export default IStorageProvider;
