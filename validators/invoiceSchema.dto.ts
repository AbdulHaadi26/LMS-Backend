import Joi from "joi";

const InvoiceSchemaValidator = Joi.object({
  _id: Joi.object().required(),
  name: Joi.string().required(),
  invoiceNo: Joi.string().required(),
  department: Joi.string().optional(),
  description: Joi.string().optional(),
  amount: Joi.number().optional(),
  currency: Joi.string().optional(),
  dated: Joi.date().required(),
  type: Joi.string().required(),
  status: Joi.string().required(),
  sentBy: Joi.object()
    .keys({
      name: Joi.string().optional(),
      email: Joi.string().optional(),
      contactNo: Joi.string().optional(),
    })
    .optional(),
  receivedBy: Joi.object()
    .keys({
      name: Joi.string().optional(),
      email: Joi.string().optional(),
      contactNo: Joi.string().optional(),
    })
    .optional(),
  attachments: Joi.array().optional(),
  createdBy: Joi.object().required(),
  updatedBy: Joi.object().required(),
  createdAt: Joi.date().optional(),
  updatedAt: Joi.date().optional(),
  tenantId: Joi.object().required(),
  isActive: Joi.boolean().optional(),
});

export { InvoiceSchemaValidator };
