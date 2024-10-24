import mongoose from "mongoose";
import { UserTypes } from "../types";
import { UserModel } from "../models/user.model";

export const createAdminEmployee = async (
  email: string,
  password: string,
  tenantId: object
) => {
  const userData = {
    _id: new mongoose.Types.ObjectId(),
    email: email,
    password: password,
    type: UserTypes.ADMIN,
    tenantId: tenantId,
  };

  await UserModel.create(userData);

  return userData;
};

export const employeeExists = async (email: string) => {
  const employee = await UserModel.findOne(
    { email: new RegExp(`^${email}$`, "i") },
    {
      _id: 1,
    }
  );

  if (employee?._id) {
    throw new Error("Employee already exists");
  }
};

export const getEmployeeByEmail = async (email: string) => {
  const employee = await UserModel.findOne(
    { email: email, isActive: true },
    {
      password: 1,
      email: 1,
      tenantId: 1,
    }
  );

  if (!employee?._id) {
    throw new Error("Employee not found");
  }

  return employee;
};

export const getProfile = async (_id: string, tenantId: string) => {
  const employee = await UserModel.findOne(
    {
      _id,
      tenantId,
    },
    {
      _id: 1,
      name: 1,
      email: 1,
      tenantId: 1,
      type: 1,
    }
  );

  if (!employee?._id) {
    throw new Error("Employee not found");
  }

  return employee;
};
