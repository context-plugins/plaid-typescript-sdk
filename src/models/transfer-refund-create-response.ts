import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferRefundSchema, type TransferRefund } from "./transfer-refund.js";

export type TransferRefundCreateResponse = {
  refund: TransferRefund;
  requestId: string;
};

export const transferRefundCreateResponseSchema: Schema<TransferRefundCreateResponse> =
  s.object<TransferRefundCreateResponse>({
    refund: transferRefundSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
