import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferRefundGetRequest = {
  clientId?: string;
  secret?: string;
  refundId: string;
};

export const transferRefundGetRequestSchema: Schema<TransferRefundGetRequest> =
  s.object<TransferRefundGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    refundId: s.string(),
    _keysMap: {
      clientId: "client_id",
      refundId: "refund_id",
    },
  });
