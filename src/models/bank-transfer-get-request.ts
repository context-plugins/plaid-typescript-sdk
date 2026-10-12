import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/bank_transfer/get` */
export type BankTransferGetRequest = {
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
  /** Plaid's unique identifier for a bank transfer. */
  bankTransferId: string;
};

export const bankTransferGetRequestSchema: Schema<BankTransferGetRequest> = s.object<BankTransferGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  bankTransferId: s.string(),
  _keysMap: {
    clientId: "client_id",
    bankTransferId: "bank_transfer_id",
  },
});
