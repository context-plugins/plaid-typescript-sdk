import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferAuthorizationSchema, type TransferAuthorization } from "./transfer-authorization.js";

export type TransferAuthorizationCreateResponse = {
  authorization: TransferAuthorization;
  requestId: string;
};

export const transferAuthorizationCreateResponseSchema: Schema<TransferAuthorizationCreateResponse> =
  s.object<TransferAuthorizationCreateResponse>({
    authorization: transferAuthorizationSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
