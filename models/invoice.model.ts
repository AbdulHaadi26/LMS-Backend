import mongoose from "mongoose";
import { IInvoiceProps, InvoiceSchema } from "../schemas/invoices.schema";
import { InvoiceSchemaValidator } from "../validators/invoiceSchema.dto";

InvoiceSchema.index({ _id: 1, type: 1, tenantId: 1, isActive: 1 });

InvoiceSchema.pre("validate", async function (next) {
  await InvoiceSchemaValidator.validateAsync(this.toObject());
  next();
});

const InvoiceModel = mongoose.model<IInvoiceProps>("invoices", InvoiceSchema);

export { IInvoiceProps, InvoiceModel };
