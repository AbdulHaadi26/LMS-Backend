import { ResponseCodeTexts } from "./enums";

export const PREDEFINED_RESPONSE_TEXTS: Record<number, string> = {
  401: ResponseCodeTexts.UNAUTHORIZED,
  403: ResponseCodeTexts.FORBIDDEN,
  500: ResponseCodeTexts.INTERNAL_SERVER_ERROR,
};
