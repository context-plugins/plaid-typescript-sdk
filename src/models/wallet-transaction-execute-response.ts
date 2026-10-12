import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { walletTransactionStatusSchema, type WalletTransactionStatus } from "./wallet-transaction-status.js";

/**
 * WalletTransactionExecuteResponse defines the response schema for `/wallet/transaction/execute`
 */
export type WalletTransactionExecuteResponse = {
  /** A unique ID identifying the transaction */
  transactionId: string;
  /**
   * The status of the transaction.
   *
   * `AUTHORISING`: The transaction is being processed for validation and compliance.
   *
   * `INITIATED`: The transaction has been initiated and is currently being processed.
   *
   * `EXECUTED`: The transaction has been successfully executed and is considered complete. This is
   * only applicable for debit transactions.
   *
   * `SETTLED`: The transaction has settled and funds are available for use. This is only applicable
   * for credit transactions. A transaction will typically settle within seconds to several days,
   * depending on which payment rail is used.
   *
   * `FAILED`: The transaction failed to process successfully. This is a terminal status.
   *
   * `BLOCKED`: The transaction has been blocked for violating compliance rules. This is a terminal
   * status.
   */
  status: WalletTransactionStatus;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
