import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BankTransferCancelRequest = {
  clientId?: string;
  secret?: string;
  bankTransferId: string;
};

export const bankTransferCancelRequestSchema: Schema<BankTransferCancelRequest> =
  s.object<BankTransferCancelRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    bankTransferId: s.string(),
    _keysMap: {
      clientId: "client_id",
      bankTransferId: "bank_transfer_id",
    },
  });
