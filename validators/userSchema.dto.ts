import Joi from "joi";

const UserSchemaValidator = Joi.object({
  _id: Joi.object().required(),
  name: Joi.string().optional(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  birthday: Joi.date().optional(),
  gender: Joi.string().optional(),
  cnic: Joi.string().optional(),
  personalNo: Joi.string().optional(),
  contactNo: Joi.string().optional(),
  vendorNo: Joi.string().optional(),
  scale: Joi.string().optional(),
  type: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  tenantId: Joi.object().required(),
  isActive: Joi.boolean(),
});

export { UserSchemaValidator };
