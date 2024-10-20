import { Schema } from "mongoose";

interface ITenantProps {
  _id: object;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
}

const TenantSchema = new Schema<ITenantProps>({
  _id: { type: Object, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
});

export { TenantSchema, ITenantProps };
