import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { walletTransactionStatusSchema, type WalletTransactionStatus } from "./wallet-transaction-status.js";

export type WalletTransactionExecuteResponse = {
  transactionId: string;
  status: WalletTransactionStatus;
  requestId: string;
};

export const walletTransactionExecuteResponseSchema: Schema<WalletTransactionExecuteResponse> =
  s.object<WalletTransactionExecuteResponse>({
    transactionId: s.string(),
    status: walletTransactionStatusSchema,
    requestId: s.string(),
    _keysMap: {
      transactionId: "transaction_id",
      requestId: "request_id",
    },
  });
