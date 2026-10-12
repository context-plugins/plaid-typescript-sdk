import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  walletTransactionFailureReasonSchema,
  type WalletTransactionFailureReason,
} from "./wallet-transaction-failure-reason.js";
import { walletTransactionStatusSchema, type WalletTransactionStatus } from "./wallet-transaction-status.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/** Fired when the status of a wallet transaction has changed. */
export type WalletTransactionStatusUpdateWebhook = {
  /** `WALLET` */
  webhookType: string;
  /** `WALLET_TRANSACTION_STATUS_UPDATE` */
  webhookCode: string;
  /** The `transaction_id` for the wallet transaction being updated */
  transactionId: string;
  /**
   * The `payment_id` associated with the transaction. This will be present in case of `REFUND` and
   * `PIS_PAY_IN`.
   */
  paymentId?: string | null;
  /**
   * The EMI (E-Money Institution) wallet that this payment is associated with. This wallet is used
   * as an intermediary account to enable Plaid to reconcile the settlement of funds for Payment
   * Initiation requests.
   */
  walletId?: string;
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
  newStatus: WalletTransactionStatus;
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
  oldStatus: WalletTransactionStatus;
  /**
   * The error code of a failed transaction. Error codes include: `EXTERNAL_SYSTEM`: The transaction
   * was declined by an external system. `EXPIRED`: The transaction request has expired.
   * `CANCELLED`: The transaction request was rescinded. `INVALID`: The transaction did not meet
   * certain criteria, such as an inactive account or no valid counterparty, etc. `ACCOUNT_INVALID`:
   * The transaction could not be processed because the wallet account is invalid or inactive.
   * `AUTHENTICATION_FAILED`: The transaction could not be processed because authentication with the
   * wallet provider failed. `UNKNOWN`: The transaction was unsuccessful, but the exact cause is
   * unknown.
   */
  failureReason?: WalletTransactionFailureReason | null;
  /**
   * The timestamp of the update, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format, e.g.
   * `"2017-09-14T14:42:19.350Z"`
   */
  timestamp: Date;
  /**
   * Errors are identified by `error_code` and categorized by `error_type`. Use these in preference
   * to HTTP status codes to identify and handle specific errors. HTTP status codes are set and
   * provide the broadest categorization of errors: 4xx codes are for developer- or user-related
   * errors, and 5xx codes are for Plaid-related errors, and the status will be 2xx in non-error
   * cases. An Item with a non-`null` error object will only be part of an API response when calling
   * `/item/get` to view Item status. Otherwise, error fields will be `null` if no error has
   * occurred; if an error has occurred, an error code will be returned instead.
   */
  error?: Error | null;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const walletTransactionStatusUpdateWebhookSchema: Schema<WalletTransactionStatusUpdateWebhook> =
  s.object<WalletTransactionStatusUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    transactionId: s.string(),
    paymentId: s.optionalNullable(s.string()),
    walletId: s.optional(s.string()),
    newStatus: walletTransactionStatusSchema,
    oldStatus: walletTransactionStatusSchema,
    failureReason: s.optionalNullable(s.lazy(() => walletTransactionFailureReasonSchema)),
    timestamp: s.dateTime(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      transactionId: "transaction_id",
      paymentId: "payment_id",
      walletId: "wallet_id",
      newStatus: "new_status",
      oldStatus: "old_status",
      failureReason: "failure_reason",
    },
  });
