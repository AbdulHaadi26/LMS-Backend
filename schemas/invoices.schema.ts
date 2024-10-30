import { Schema } from "mongoose";
import { InoviceStatuses, InvoiceTypes } from "../utils";
import { IAttachmentProps } from "./attachment.schema";

interface IInvoiceProps {
  _id: object;
  name: string;
  invoiceNo: string;
  department: string;
  description: string;
  amount: number;
  currency: string;
  dated: Date;
  type: InvoiceTypes;
  status: InoviceStatuses;
  sentBy: {
    name: string;
    email: string;
    contactNo: string;
  };
  receivedBy: {
    name: string;
    email: string;
    contactNo: string;
  };
  attachments: Array<IAttachmentProps>;
  createdBy: object;
  updatedBy: object;
  createdAt: Date;
  updatedAt: Date;
  tenantId: object;
  isActive: boolean;
}

const InvoiceSchema = new Schema<IInvoiceProps>({
  name: { type: String },
  invoiceNo: { type: String },
  department: { type: String },
  description: { type: String },
  amount: { type: Number },
  currency: { type: String, default: "PKR" },
  dated: { type: Date },
  status: { type: String, enum: Object.values(InoviceStatuses) },
  type: { type: String, enum: Object.values(InvoiceTypes) },
  sentBy: {
    name: { type: String },
    email: { type: String },
    contactNo: { type: String },
  },
  receivedBy: {
    name: { type: String },
    email: { type: String },
    contactNo: { type: String },
  },
  attachments: [
    {
      type: Schema.Types.ObjectId,
      ref: "attachments",
    },
  ],
  createdBy: { type: Schema.Types.ObjectId, ref: "users" },
  updatedBy: { type: Schema.Types.ObjectId, ref: "users" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  tenantId: { type: Schema.Types.ObjectId, ref: "tenants", required: true },
  isActive: { type: Boolean, default: true },
});

export { IInvoiceProps, InvoiceSchema };
