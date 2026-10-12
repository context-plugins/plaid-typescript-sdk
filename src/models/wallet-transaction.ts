import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { type5Schema, type Type5 } from "./type5.js";
import { walletPaymentSchemeSchema, type WalletPaymentScheme } from "./wallet-payment-scheme.js";
import { walletTransactionAmountSchema, type WalletTransactionAmount } from "./wallet-transaction-amount.js";
import {
  walletTransactionCounterpartySchema,
  type WalletTransactionCounterparty,
} from "./wallet-transaction-counterparty.js";
import {
  walletTransactionFailureReasonSchema,
  type WalletTransactionFailureReason,
} from "./wallet-transaction-failure-reason.js";
import {
  walletTransactionPayeeVerificationStatusSchema,
  type WalletTransactionPayeeVerificationStatus,
} from "./wallet-transaction-payee-verification-status.js";
import {
  walletTransactionRelationSchema,
  type WalletTransactionRelation,
} from "./wallet-transaction-relation.js";
import { walletTransactionStatusSchema, type WalletTransactionStatus } from "./wallet-transaction-status.js";

/** The transaction details */
export type WalletTransaction = {
  /** A unique ID identifying the transaction */
  transactionId: string;
  /** The ID of the e-wallet that this transaction is associated with. */
  walletId: string;
  /** A reference for the transaction */
  reference: string;
  /**
   * The type of the transaction. The supported transaction types that are returned are:
   * `BANK_TRANSFER:` a transaction which credits an e-wallet through an external bank transfer.
   *
   * `PAYOUT:` a transaction which debits an e-wallet by disbursing funds to a counterparty.
   *
   * `PIS_PAY_IN:` a payment which credits an e-wallet through Plaid's Payment Initiation Services
   * (PIS) APIs. For more information see the [Payment Initiation
   * endpoints](https://plaid.com/docs/api/products/payment-initiation/).
   *
   * `REFUND:` a transaction which debits an e-wallet by refunding a previously initiated payment
   * made through Plaid's [PIS APIs](https://plaid.com/docs/api/products/payment-initiation/).
   *
   * `FUNDS_SWEEP`: an automated transaction which debits funds from an e-wallet to a designated
   * client-owned account.
   *
   * `RETURN`: an automated transaction where a debit transaction was reversed and money moved back
   * to originating account.
   *
   * `RECALL`: a transaction where the sending bank has requested the return of funds due to a fraud
   * claim, technical error, or other issue associated with the payment.
   *
   * `ACCOUNT_FUNDING`: an incoming transfer from an allowlisted account. Not automatically
   * refunded.
   *
   * `AUTO_REFUND`: an outgoing refund automatically initiated by Plaid in response to an unexpected
   * `BANK_TRANSFER`.
   */
  type: Type5;
  /**
   * The payment scheme used to execute this transaction. This is present only for transaction types
   * `PAYOUT` and `REFUND`.
   *
   * `FASTER_PAYMENTS`: The standard payment scheme within the UK.
   *
   * `SEPA_CREDIT_TRANSFER`: The standard payment to a beneficiary within the SEPA area.
   *
   * `SEPA_CREDIT_TRANSFER_INSTANT`: Instant payment to a beneficiary within the SEPA area.
   */
  scheme?: WalletPaymentScheme | null;
  /** The amount and currency of a transaction */
  amount: WalletTransactionAmount;
  /** An object representing the e-wallet transaction's counterparty */
  counterparty: WalletTransactionCounterparty;
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
   * Timestamp when the transaction was created, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: Date;
  /** The date and time of the last time the `status` was updated, in ISO 8601 format */
  lastStatusUpdate: Date;
  /**
   * Result of payee verification check for EUR payouts. Payee verification checks whether the payee
   * name provided matches the account holder name at the destination institution.
   *
   * `FULL_MATCH`: The payee name fully matches the account holder.
   *
   * `PARTIAL_MATCH`: The payee name partially matches the account holder.
   *
   * `NO_MATCH`: The payee name does not match the account holder.
   *
   * `ERROR`: An error occurred during payee verification.
   *
   * `CHECK_NOT_POSSIBLE`: Payee verification could not be performed.
   *
   * This field is only populated for applicable EUR payout transactions and will be `null` for
   * other transaction types.
   */
  payeeVerificationStatus?: WalletTransactionPayeeVerificationStatus | null;
  /**
   * The payment id that this transaction is associated with, if any. This is present only for
   * transaction types `PIS_PAY_IN` and `REFUND`.
   */
  paymentId?: string | null;
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
   * Errors are identified by `error_code` and categorized by `error_type`. Use these in preference
   * to HTTP status codes to identify and handle specific errors. HTTP status codes are set and
   * provide the broadest categorization of errors: 4xx codes are for developer- or user-related
   * errors, and 5xx codes are for Plaid-related errors, and the status will be 2xx in non-error
   * cases. An Item with a non-`null` error object will only be part of an API response when calling
   * `/item/get` to view Item status. Otherwise, error fields will be `null` if no error has
   * occurred; if an error has occurred, an error code will be returned instead.
   */
  error?: Error | null;
  /** A list of wallet transactions that this transaction is associated with, if any. */
  relatedTransactions?: WalletTransactionRelation[];
};

export const walletTransactionSchema: Schema<WalletTransaction> = s.object<WalletTransaction>({
  transactionId: s.string(),
  walletId: s.string(),
  reference: s.string(),
  type: type5Schema,
  scheme: s.optionalNullable(s.lazy(() => walletPaymentSchemeSchema)),
  amount: walletTransactionAmountSchema,
  counterparty: walletTransactionCounterpartySchema,
  status: walletTransactionStatusSchema,
  createdAt: s.dateTime(),
  lastStatusUpdate: s.dateTime(),
  payeeVerificationStatus: s.optionalNullable(s.lazy(() => walletTransactionPayeeVerificationStatusSchema)),
  paymentId: s.optionalNullable(s.string()),
  failureReason: s.optionalNullable(s.lazy(() => walletTransactionFailureReasonSchema)),
  error: s.optionalNullable(s.lazy(() => errorSchema)),
  relatedTransactions: s.optional(s.array(s.lazy(() => walletTransactionRelationSchema))),
  _keysMap: {
    transactionId: "transaction_id",
    walletId: "wallet_id",
    createdAt: "created_at",
    lastStatusUpdate: "last_status_update",
    payeeVerificationStatus: "payee_verification_status",
    paymentId: "payment_id",
    failureReason: "failure_reason",
    relatedTransactions: "related_transactions",
  },
});
