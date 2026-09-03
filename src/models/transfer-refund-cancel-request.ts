import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferRefundCancelRequest = {
  clientId?: string;
  secret?: string;
  refundId: string;
};

export const transferRefundCancelRequestSchema: Schema<TransferRefundCancelRequest> =
  s.object<TransferRefundCancelRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    refundId: s.string(),
    _keysMap: {
      clientId: "client_id",
      refundId: "refund_id",
    },
  });
