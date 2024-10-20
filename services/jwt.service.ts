import jsonwebtoken from "jsonwebtoken";

export const signToken = (payload: any) => {
  return jsonwebtoken.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const verifyToken = (token: string) => {
  return jsonwebtoken.verify(token, process.env.JWT_SECRET!);
};

export const decodeToken = (token: string) => {
  return jsonwebtoken.decode(token);
};
