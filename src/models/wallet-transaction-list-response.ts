import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { walletTransactionSchema, type WalletTransaction } from "./wallet-transaction.js";

export type WalletTransactionListResponse = {
  transactions: WalletTransaction[];
  nextCursor?: string;
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
