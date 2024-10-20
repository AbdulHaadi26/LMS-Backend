import { Schema } from "mongoose";
import { UserTypes } from "../types";

interface IUserProps {
  _id: object;
  name?: string;
  email: string;
  password: string;
  birthday?: Date;
  gender?: string;
  cnic?: string;
  personalNo?: string;
  contactNo?: string;
  vendorNo?: string;
  designation?: string;
  scale?: string;
  createdAt?: Date;
  updatedAt?: Date;
  type: UserTypes;
  tenantId: object;
  isActive?: boolean;
}

const UserSchema = new Schema<IUserProps>({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthday: { type: Date },
  gender: { type: String },
  cnic: { type: String },
  personalNo: { type: String },
  contactNo: { type: String },
  vendorNo: { type: String },
  designation: { type: String },
  scale: { type: String },
  type: { type: String, enum: Object.values(UserTypes), required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  tenantId: { type: Schema.Types.ObjectId, ref: "tenants", required: true },
  isActive: { type: Boolean, default: true },
});

export { UserSchema, IUserProps };
