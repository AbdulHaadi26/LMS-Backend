import mongoose from "mongoose";
import { AttachmentModel } from "../models/attachment.model";
import { S3PathNames } from "../utils";

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
