import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferRefundCreateRequest = {
  clientId?: string;
  secret?: string;
  transferId: string;
  amount: string;
  idempotencyKey: string;
};

export const transferRefundCreateRequestSchema: Schema<TransferRefundCreateRequest> =
  s.object<TransferRefundCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    transferId: s.string(),
    amount: s.string(),
    idempotencyKey: s.string(),
    _keysMap: {
      clientId: "client_id",
      transferId: "transfer_id",
      idempotencyKey: "idempotency_key",
    },
  });
