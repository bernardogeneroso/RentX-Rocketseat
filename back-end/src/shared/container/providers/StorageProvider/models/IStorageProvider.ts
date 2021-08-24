export interface File {
  file: string;
  options: "avatars" | "carImages" | "rest";
}

interface IStorageProvider {
  saveFile(data: File): Promise<string>;
  deleteFile(data: File): Promise<void>;
}

export default IStorageProvider;
