import bcrypt from "bcrypt";

export const compareHash = async (str: string, hash: string) => {
  return await bcrypt.compare(str, hash);
};

export const hashString = async (str: string) => {
  return await bcrypt.hash(str, 10);
};
