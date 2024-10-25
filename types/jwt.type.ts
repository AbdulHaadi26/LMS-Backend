import { UserTypes } from "./user.type";

type JWTPayloadType = {
  _id: string;
  tenantId: string;
  userType: UserTypes;
};

export type { JWTPayloadType };
