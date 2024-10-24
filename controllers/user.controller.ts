import { Request, Response } from "express";
import { ResponseCodes } from "../utils";
import { JWTPayloadType } from "../types";
import { getProfile } from "../services";

const profile = async (req: Request, res: Response) => {
  try {
    const { _id, tenantId } = req.user as JWTPayloadType;

    const employee = await getProfile(_id, tenantId);

    res.success({ profile: employee });
  } catch (error) {
    res.error(ResponseCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export { profile };
