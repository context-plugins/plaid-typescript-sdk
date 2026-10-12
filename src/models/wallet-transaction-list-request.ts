import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  walletTransactionListRequestOptionsSchema,
  type WalletTransactionListRequestOptions,
} from "./wallet-transaction-list-request-options.js";

/** WalletTransactionListRequest defines the request schema for `/wallet/transaction/list` */
export type WalletTransactionListRequest = {
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
  /** The ID of the e-wallet to fetch transactions from */
  walletId: string;
  /**
   * A value representing the latest transaction to be included in the response. Set this from
   * `next_cursor` received in the previous `/wallet/transaction/list` request. If provided, the
   * response will only contain that transaction and transactions created before it. If omitted, the
   * response will contain transactions starting from the most recent, and in descending order by
   * the `created_at` time.
   */
  cursor?: string;
  /** The number of transactions to fetch @default 10 */
  count?: number;
  /** Additional wallet transaction options */
  options?: WalletTransactionListRequestOptions | null;
};

export const walletTransactionListRequestSchema: Schema<WalletTransactionListRequest> =
  s.object<WalletTransactionListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    walletId: s.string(),
    cursor: s.optional(s.string()),
    count: s.defaulted(s.int(), 10),
    options: s.optionalNullable(s.lazy(() => walletTransactionListRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      walletId: "wallet_id",
    },
  });
