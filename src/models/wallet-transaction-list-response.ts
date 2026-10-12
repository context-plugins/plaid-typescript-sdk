import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { walletTransactionSchema, type WalletTransaction } from "./wallet-transaction.js";

/** WalletTransactionListResponse defines the response schema for `/wallet/transaction/list` */
export type WalletTransactionListResponse = {
  /** An array of transactions of an e-wallet, associated with the given `wallet_id` */
  transactions: WalletTransaction[];
  /**
   * The value that, when used as the optional `cursor` parameter to `/wallet/transaction/list`,
   * will return the corresponding transaction as its first entry.
   */
  nextCursor?: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const walletTransactionListResponseSchema: Schema<WalletTransactionListResponse> =
  s.object<WalletTransactionListResponse>({
    transactions: s.array(s.lazy(() => walletTransactionSchema)),
    nextCursor: s.optional(s.string()),
    requestId: s.string(),
    _keysMap: {
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
