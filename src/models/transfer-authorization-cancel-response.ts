import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferAuthorizationCancelResponse = {
  requestId: string;
};

export const transferAuthorizationCancelResponseSchema: Schema<TransferAuthorizationCancelResponse> =
  s.object<TransferAuthorizationCancelResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
