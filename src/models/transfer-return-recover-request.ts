import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferReturnRecoverRequest = {
  clientId?: string;
  secret?: string;
  transferId: string;
  amount: string;
  idempotencyKey: string;
};

export const transferReturnRecoverRequestSchema: Schema<TransferReturnRecoverRequest> =
  s.object<TransferReturnRecoverRequest>({
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
