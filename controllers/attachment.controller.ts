import { Request, Response } from "express";
import { createAttachment } from "../services/attachments.service";
import { putPreSignedURL } from "../services/s3.service";
import { JWTPayloadType } from "../types";
import { ResponseCodes } from "../utils";

const presignURL = async (req: Request, res: Response) => {
  try {
    const { name, mimeType, size, type } = req.body;
    const { _id, tenantId } = req.user as JWTPayloadType;

    const attachmentData = await createAttachment(
      name,
      size,
      mimeType,
      type,
      _id,
      tenantId
    );

    const url = await putPreSignedURL(attachmentData.path, mimeType);

    res.success({ attachment: attachmentData, url });
  } catch (error) {
    res.error(ResponseCodes.INTERNAL_SERVER_ERROR, error);
  }
};

export { presignURL };
