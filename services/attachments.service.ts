import mongoose from "mongoose";
import { AttachmentModel } from "../models/attachment.model";
import { S3PathNames } from "../utils";
import { deleteObject } from "./s3.service";

export const createAttachment = async (
  name: string,
  size: number,
  mimeType: string,
  userId: string,
  type: string,
  tenantId: string
) => {
  const path = `${
    S3PathNames.BASE
  }/${tenantId}/${type}/${userId}/${Date.now()}-${name}`;

  const attachmentData = {
    _id: new mongoose.Types.ObjectId(),
    name: name,
    size: size,
    path: path,
    mimeType: mimeType,
    createdBy: userId,
    updatedBy: userId,
    tenantId: tenantId,
  };

  await AttachmentModel.create(attachmentData);

  return attachmentData;
};

export const deleteAttachments = async (
  deleteAttachments: string[],
  tenantId: string
) => {
  const attachmentIds = deleteAttachments.map(
    (id) => new mongoose.Types.ObjectId(id)
  );

  const attachments = await AttachmentModel.find(
    {
      _id: { $in: attachmentIds },
      tenantId: tenantId,
      isActive: true,
    },
    {
      _id: 1,
      path: 1,
    }
  );

  await Promise.all(
    attachments.map(async (attachment) => {
      await deleteObject(attachment.path);
    })
  );

  await AttachmentModel.updateMany(
    {
      _id: { $in: attachmentIds },
      tenantId: new mongoose.Types.ObjectId(tenantId),
      isActive: true,
    },
    { isActive: false }
  );
};
