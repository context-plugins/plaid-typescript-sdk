import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  walletTransactionListRequestOptionsSchema,
  type WalletTransactionListRequestOptions,
} from "./wallet-transaction-list-request-options.js";

export type WalletTransactionListRequest = {
  clientId?: string;
  secret?: string;
  walletId: string;
  cursor?: string;
  count?: number;
  options?: WalletTransactionListRequestOptions | null;
};

export const walletTransactionListRequestSchema: Schema<WalletTransactionListRequest> =
  s.object<WalletTransactionListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    walletId: s.string(),
    cursor: s.optional(s.string()),
    count: s.optional(s.number()),
    options: s.optionalNullable(s.lazy(() => walletTransactionListRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      walletId: "wallet_id",
    },
  });
