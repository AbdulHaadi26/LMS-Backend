import Joi from "joi";

const TenantSchemaValidator = Joi.object({
  _id: Joi.object().required(),
  name: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  isActive: Joi.boolean(),
});

export { TenantSchemaValidator };
