import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferRecurringCancelRequest = {
  clientId?: string;
  secret?: string;
  recurringTransferId: string;
};

export const transferRecurringCancelRequestSchema: Schema<TransferRecurringCancelRequest> =
  s.object<TransferRecurringCancelRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    recurringTransferId: s.string(),
    _keysMap: {
      clientId: "client_id",
      recurringTransferId: "recurring_transfer_id",
    },
  });
