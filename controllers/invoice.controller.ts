import { Request, Response } from "express";
import mongoose from "mongoose";
import { deleteAttachments } from "../services/attachments.service";
import {
  createInvoice,
  createInvoiceAttachments,
  deleteInvoiceAttachments,
  getInvoiceById,
  getInvoices,
  updateInvoice,
  updateInvoiceStatus,
} from "../services/invoices.service";
import { JWTPayloadType } from "../types";
import { InoviceStatuses, InvoiceTypes, ResponseCodes } from "../utils";

const find = async (req: Request, res: Response) => {
  try {
    const { tenantId } = req.user as JWTPayloadType;
    const {
      page = 1,
      page_size = 10,
      type = InvoiceTypes.ALL,
      status = InoviceStatuses.ALL,
      searchString = "",
    } = req.query;

    const invoices = await getInvoices(
      tenantId,
      Number(page),
      Number(page_size),
      type as InvoiceTypes,
      status as InoviceStatuses,
      String(searchString)
    );
    res.success(invoices);
  } catch (error) {
    res.error(ResponseCodes.INTERNAL_SERVER_ERROR, error);
  }
};

const findOne = async (req: Request, res: Response) => {
  try {
    const { tenantId } = req.user as JWTPayloadType;
    const { invoiceId } = req.params;
    const invoice = await getInvoiceById(
      new mongoose.Types.ObjectId(invoiceId),
      tenantId
    );
    res.success(invoice);
  } catch (error) {
    res.error(ResponseCodes.INTERNAL_SERVER_ERROR, error);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const { _id, tenantId } = req.user as JWTPayloadType;

    const invoiceId = new mongoose.Types.ObjectId();

    await createInvoice({
      ...req.body,
      _id: invoiceId,
      tenantId,
      createdBy: _id,
      updatedBy: _id,
    });
    const invoice = await getInvoiceById(invoiceId, tenantId);

    res.success(invoice);
  } catch (error) {
    res.error(ResponseCodes.INTERNAL_SERVER_ERROR, error);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const { tenantId } = req.user as JWTPayloadType;
    const { invoiceId } = req.params;

    await updateInvoice(
      new mongoose.Types.ObjectId(invoiceId),
      tenantId,
      req.body
    );

    const invoice = await getInvoiceById(
      new mongoose.Types.ObjectId(invoiceId),
      tenantId
    );
    res.success(invoice);
  } catch (error) {
    res.error(ResponseCodes.INTERNAL_SERVER_ERROR, error);
  }
};

const updateActive = async (req: Request, res: Response) => {
  try {
    const { tenantId } = req.user as JWTPayloadType;
    const { invoiceId } = req.params;
    await updateInvoiceStatus(
      new mongoose.Types.ObjectId(invoiceId),
      tenantId,
      req.body.isActive
    );
    const invoice = await getInvoiceById(
      new mongoose.Types.ObjectId(invoiceId),
      tenantId
    );
    res.success(invoice);
  } catch (error) {
    res.error(ResponseCodes.INTERNAL_SERVER_ERROR, error);
  }
};

const addInvoiceAttachments = async (req: Request, res: Response) => {
  try {
    const { tenantId } = req.user as JWTPayloadType;
    const { invoiceId } = req.params;

    await createInvoiceAttachments(
      new mongoose.Types.ObjectId(invoiceId),
      tenantId,
      req.body.attachments
    );

    const invoice = await getInvoiceById(
      new mongoose.Types.ObjectId(invoiceId),
      tenantId
    );

    res.success(invoice);
  } catch (error) {
    res.error(ResponseCodes.INTERNAL_SERVER_ERROR, error);
  }
};

const removeInvoiceAttachments = async (req: Request, res: Response) => {
  try {
    const { tenantId } = req.user as JWTPayloadType;
    const { invoiceId } = req.params;

    await deleteInvoiceAttachments(
      new mongoose.Types.ObjectId(invoiceId),
      tenantId,
      req.body.attachments
    );

    await deleteAttachments(req.body.attachments, tenantId);

    const invoice = await getInvoiceById(
      new mongoose.Types.ObjectId(invoiceId),
      tenantId
    );

    res.success(invoice);
  } catch (error) {
    res.error(ResponseCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export {
  addInvoiceAttachments,
  create,
  find,
  findOne,
  removeInvoiceAttachments,
  update,
  updateActive,
};
