import { Schema } from "mongoose";

interface IAttachmentProps {
  _id: object;
  name: string;
  path: string;
  mimeType: string;
  size: number;
  createdBy: object;
  updatedBy: object;
  createdAt: Date;
  updatedAt: Date;
  tenantId: object;
  isActive: boolean;
}

const AttachmentSchema = new Schema<IAttachmentProps>({
  name: { type: String },
  path: { type: String },
  mimeType: { type: String },
  size: { type: Number },
  createdBy: { type: Schema.Types.ObjectId, ref: "users" },
  updatedBy: { type: Schema.Types.ObjectId, ref: "users" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  tenantId: { type: Schema.Types.ObjectId, ref: "tenants", required: true },
  isActive: { type: Boolean, default: true },
});

export { AttachmentSchema, IAttachmentProps };
