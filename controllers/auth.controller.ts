import { Request, Response } from "express";
import {
  compareHash,
  getEmployeeByEmail,
  getTenantById,
  signToken,
} from "../services";
import { ResponseCodes } from "../utils";

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const employee = await getEmployeeByEmail(email);
    const tenant = await getTenantById(String(employee.tenantId));

    const isPasswordValid = await compareHash(password, employee.password);

    if (!isPasswordValid) {
      return res.error(ResponseCodes.UNAUTHORIZED, "Invalid credentials");
    }

    const token = signToken({
      _id: employee._id,
      userType: employee.type,
      tenantId: tenant._id,
    });

    res.success({ token });
  } catch (error) {
    res.error(ResponseCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export { login };
