import mongoose from "mongoose";
import { TenantModel } from "../models/tenant.model";

export const getTenantById = async (_id: string) => {
  const tenant = await TenantModel.findOne({
    _id: new mongoose.Types.ObjectId(_id),
    isActive: true,
  });

  if (!tenant?._id) {
    throw new Error("Tenant not found");
  }

  return tenant;
};

export const tenantExists = async (name: string) => {
  const tenant = await TenantModel.findOne({
    name: new RegExp(`^${name}$`, "i"),
  });

  if (tenant?._id) {
    throw new Error("Tenant already exists");
  }
};

export const createTenant = async (name: string) => {
  const data = {
    _id: new mongoose.Types.ObjectId(),
    name: name,
  };

  await TenantModel.create(data);

  return data;
};
