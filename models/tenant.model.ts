import mongoose from "mongoose";
import { TenantSchema, ITenantProps } from "../schemas/tenant.schema";
import { TenantSchemaValidator } from "../validators/tenantSchema.dto";

TenantSchema.index({ _id: 1, name: 1, isActive: 1 });

TenantSchema.pre("validate", async function (next) {
  await TenantSchemaValidator.validateAsync(this.toObject());
  next();
});

const TenantModel = mongoose.model<ITenantProps>("tenants", TenantSchema);

export { TenantModel, ITenantProps };
