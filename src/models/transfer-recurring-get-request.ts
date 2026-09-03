import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferRecurringGetRequest = {
  clientId?: string;
  secret?: string;
  recurringTransferId: string;
};

export const transferRecurringGetRequestSchema: Schema<TransferRecurringGetRequest> =
  s.object<TransferRecurringGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    recurringTransferId: s.string(),
    _keysMap: {
      clientId: "client_id",
      recurringTransferId: "recurring_transfer_id",
    },
  });
