import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferLedgerDistributeRequest = {
  clientId?: string;
  secret?: string;
  fromLedgerId: string;
  toLedgerId: string;
  amount: string;
  idempotencyKey: string;
  description?: string;
};

export const transferLedgerDistributeRequestSchema: Schema<TransferLedgerDistributeRequest> =
  s.object<TransferLedgerDistributeRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    fromLedgerId: s.string(),
    toLedgerId: s.string(),
    amount: s.string(),
    idempotencyKey: s.string(),
    description: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      fromLedgerId: "from_ledger_id",
      toLedgerId: "to_ledger_id",
      idempotencyKey: "idempotency_key",
    },
  });
