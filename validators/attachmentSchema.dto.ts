import Joi from "joi";

const AttachmentSchemaValidator = Joi.object({
  _id: Joi.object().required(),
  name: Joi.string().required(),
  path: Joi.string().required(),
  mimeType: Joi.string().required(),
  size: Joi.number().required(),
  createdBy: Joi.object().required(),
  updatedBy: Joi.object().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  tenantId: Joi.object().required(),
  isActive: Joi.boolean(),
});

export { AttachmentSchemaValidator };
