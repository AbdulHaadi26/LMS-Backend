import mongoose from "mongoose";
import {
  AttachmentSchema,
  IAttachmentProps,
} from "../schemas/attachment.schema";
import { AttachmentSchemaValidator } from "../validators/attachmentSchema.dto";

AttachmentSchema.index({ _id: 1, tenantId: 1, isActive: 1 });

AttachmentSchema.pre("validate", async function (next) {
  await AttachmentSchemaValidator.validateAsync(this.toObject());
  next();
});

const AttachmentModel = mongoose.model<IAttachmentProps>(
  "attachments",
  AttachmentSchema
);

export { AttachmentModel, IAttachmentProps };
