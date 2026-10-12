import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** WalletTransactionGetRequest defines the request schema for `/wallet/transaction/get` */
export type WalletTransactionGetRequest = {
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
  /** The ID of the transaction to fetch */
  transactionId: string;
};

export const walletTransactionGetRequestSchema: Schema<WalletTransactionGetRequest> =
  s.object<WalletTransactionGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    transactionId: s.string(),
    _keysMap: {
      clientId: "client_id",
      transactionId: "transaction_id",
    },
  });
