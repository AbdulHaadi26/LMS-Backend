import { Request, Response } from "express";
import { getProfile, getTenantById } from "../services";
import { JWTPayloadType } from "../types";
import { ResponseCodes } from "../utils";

const profile = async (req: Request, res: Response) => {
  try {
    const { _id, tenantId } = req.user as JWTPayloadType;

    const [tenant, employee] = await Promise.all([
      getProfile(_id, tenantId),
      getTenantById(tenantId),
    ]);

    return res.success({ profile: employee, tenant });
  } catch (error) {
    res.error(ResponseCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export { profile };
