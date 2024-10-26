import { NextFunction, Request, Response } from "express";
import { JWTPayloadType, UserTypes } from "../types";
import { ResponseCodes } from "../utils";

const roleAuthorization = (requiredRoles: UserTypes[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.error(ResponseCodes.UNAUTHORIZED, "Unauthorized");
    }

    const user = req.user as JWTPayloadType;

    if (!requiredRoles.includes(user.userType)) {
      return res.error(ResponseCodes.FORBIDDEN, "Forbidden");
    }

    next();
  };
};

export { roleAuthorization };
