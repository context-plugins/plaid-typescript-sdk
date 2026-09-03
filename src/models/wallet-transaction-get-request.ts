import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WalletTransactionGetRequest = {
  clientId?: string;
  secret?: string;
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
