import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemAccessTokenInvalidateResponse = {
  newAccessToken: string;
  requestId: string;
};

export const itemAccessTokenInvalidateResponseSchema: Schema<ItemAccessTokenInvalidateResponse> =
  s.object<ItemAccessTokenInvalidateResponse>({
    newAccessToken: s.string(),
    requestId: s.string(),
    _keysMap: {
      newAccessToken: "new_access_token",
      requestId: "request_id",
    },
  });
