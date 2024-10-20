import { Request, Response } from "express";
import {
  createAdminEmployee,
  createTenant,
  employeeExists,
  tenantExists,
} from "../services";
import { ResponseCodes } from "../utils";

const create = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    await Promise.all([employeeExists(email), tenantExists(name)]);

    const tenant = await createTenant(name);
    await createAdminEmployee(email, password, tenant._id);

    res.success("Success");
  } catch (error) {
    res.error(ResponseCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export { create };
