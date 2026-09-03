import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferRefundCancelResponse = {
  requestId: string;
};

export const transferRefundCancelResponseSchema: Schema<TransferRefundCancelResponse> =
  s.object<TransferRefundCancelResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
