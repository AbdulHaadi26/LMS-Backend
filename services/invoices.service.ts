import mongoose from "mongoose";
import { InvoiceModel } from "../models/invoice.model";
import { InoviceStatuses, InvoiceTypes } from "../utils";
import { putPreSignedURL } from "./s3.service";

export const getInvoices = async (
  tenantId: string,
  page: number = 1,
  pageSize: number = 10,
  type: InvoiceTypes = InvoiceTypes.ALL,
  status: InoviceStatuses = InoviceStatuses.ALL,
  searchString: string = ""
) => {
  let query: {
    tenantId: object;
    type?: InvoiceTypes;
    status?: InoviceStatuses;
    name?: RegExp;
  } = {
    tenantId: new mongoose.Types.ObjectId(tenantId),
  };

  if (type !== InvoiceTypes.ALL) {
    query = {
      ...query,
      type,
    };
  }

  if (status !== InoviceStatuses.ALL) {
    query = {
      ...query,
      status,
    };
  }

  if (searchString) {
    query = {
      ...query,
      name: new RegExp(searchString, "i"),
    };
  }

  const skip = (Number(page) - 1) * Number(pageSize);
  const invoices = await InvoiceModel.find(query)
    .sort({ dated: -1 })
    .skip(skip)
    .limit(Number(pageSize));

  return invoices;
};

export const getInvoiceById = async (_id: object, tenantId: string) => {
  const invoice = await InvoiceModel.findOne({
    _id,
    tenantId: new mongoose.Types.ObjectId(tenantId),
    isActive: true,
  }).populate([
    {
      path: "attachments",
      model: "attachments",
      select: ["_id", "name", "path", "mimeType", "size"],
    },
    {
      path: "updatedBy",
      model: "users",
      select: ["_id", "name"],
    },
  ]);

  if (!invoice?._id) {
    throw new Error("Invoice not found");
  }

  if (invoice?.attachments?.length > 0) {
    await Promise.all(
      invoice.attachments.map(async (attachment) => {
        if (attachment.path && attachment.mimeType) {
          attachment.path = await putPreSignedURL(
            attachment.path,
            attachment.mimeType
          );
        }

        return attachment;
      })
    );
  }

  return invoice;
};

export const updateInvoiceStatus = async (
  _id: object,
  tenantId: string,
  isActive: boolean
) => {
  await InvoiceModel.updateOne(
    {
      _id,
      tenantId: new mongoose.Types.ObjectId(tenantId),
    },
    {
      isActive,
    }
  );
};

export const createInvoice = async (invoice: object) => {
  await InvoiceModel.create(invoice);
};

export const updateInvoice = async (
  _id: object,
  tenantId: string,
  invoice: object
) => {
  await InvoiceModel.updateOne(
    { _id, tenantId: new mongoose.Types.ObjectId(tenantId) },
    invoice
  );
};

export const createInvoiceAttachments = async (
  _id: object,
  tenantId: string,
  attachments: string[]
) => {
  const ids = attachments.map((id) => new mongoose.Types.ObjectId(id));

  await InvoiceModel.updateOne(
    { _id, tenantId: new mongoose.Types.ObjectId(tenantId) },
    { $addToSet: { attachments: { $each: ids } } }
  );
};

export const deleteInvoiceAttachments = async (
  _id: object,
  tenantId: string,
  attachments: string[]
) => {
  const ids = attachments.map((id) => new mongoose.Types.ObjectId(id));

  await InvoiceModel.updateOne(
    { _id, tenantId: new mongoose.Types.ObjectId(tenantId) },
    { $pull: { attachments: { $in: ids } } }
  );
};
