import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/recurring/cancel` */
export type TransferRecurringCancelRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** Plaid's unique identifier for a recurring transfer. */
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
