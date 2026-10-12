import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  externalPaymentRefundDetailsSchema,
  type ExternalPaymentRefundDetails,
} from "./external-payment-refund-details.js";
import {
  externalPaymentScheduleGetSchema,
  type ExternalPaymentScheduleGet,
} from "./external-payment-schedule-get.js";
import { paymentAmountRefundedSchema, type PaymentAmountRefunded } from "./payment-amount-refunded.js";
import { paymentAmountSchema, type PaymentAmount } from "./payment-amount.js";
import {
  paymentInitiationPaymentStatusSchema,
  type PaymentInitiationPaymentStatus,
} from "./payment-initiation-payment-status.js";
import { paymentSchemeSchema, type PaymentScheme } from "./payment-scheme.js";
import { senderBacsNullableSchema, type SenderBacsNullable } from "./sender-bacs-nullable.js";

/**
 * PaymentInitiationPaymentGetResponse defines the response schema for
 * `/payment_initiation/payment/get`
 */
export type PaymentInitiationPaymentGetResponse = {
  /** The ID of the payment. Like all Plaid identifiers, the `payment_id` is case sensitive. */
  paymentId: string;
  /** The amount and currency of a payment */
  amount: PaymentAmount;
  /**
   * The status of the payment.
   *
   * Core lifecycle statuses:
   *
   * **`PAYMENT_STATUS_INPUT_NEEDED`**: Transitional. The payment is awaiting user input to continue
   * processing. It may re-enter this state if additional input is required.
   *
   * **`PAYMENT_STATUS_AUTHORISING`:** Transitional. The payment is being authorised by the
   * financial institution. It will automatically move on once authorisation completes.
   *
   * **`PAYMENT_STATUS_INITIATED`:** The payment has been authorised and accepted by the financial
   * institution. In many EU markets, `PAYMENT_STATUS_EXECUTED` is not supported, and a payment will
   * remain in `PAYMENT_STATUS_INITIATED` until the funds settle, making this a terminal success
   * state in those cases. A payment in `PAYMENT_STATUS_INITIATED` should be treated as a
   * successfully submitted payment; do not gate downstream processing on reaching
   * `PAYMENT_STATUS_EXECUTED`. For a full explanation of payment statuses and how to handle each,
   * see the [Payment Status guide](https://plaid.com/docs/payment-initiation/payment-status/).
   *
   * **`PAYMENT_STATUS_EXECUTED`: Terminal.** The funds have left the payer's account and the
   * payment is en route to settlement. Note that this status does not confirm that funds have
   * arrived in the recipient's account; do not use it as proof of fund receipt. Support is more
   * common in the UK than in the EU; where unsupported, a successful payment remains in
   * `PAYMENT_STATUS_INITIATED` before settling. When using Plaid Virtual Accounts,
   * `PAYMENT_STATUS_EXECUTED` is not terminal -- the payment will continue to
   * `PAYMENT_STATUS_SETTLED` once funds are available.
   *
   * **`PAYMENT_STATUS_SETTLED`: Terminal.** The funds are available in the recipient's account.
   * Only available to customers using [Plaid Virtual
   * Accounts](https://plaid.com/docs/payment-initiation/virtual-accounts/).
   *
   * Failure statuses:
   *
   * **`PAYMENT_STATUS_INSUFFICIENT_FUNDS`: Terminal.** The payment failed due to insufficient
   * funds. No further retries will succeed until the payer's balance is replenished.
   *
   * **`PAYMENT_STATUS_FAILED`: Terminal (retryable).** The payment could not be initiated due to a
   * system error or outage. Retry once the root cause is resolved.
   *
   * **`PAYMENT_STATUS_BLOCKED`: Terminal (retryable).** The payment was blocked by Plaid (e.g.,
   * flagged as risky). Resolve any compliance or risk issues and retry.
   *
   * **`PAYMENT_STATUS_REJECTED`: Terminal.** The payment was rejected by the financial institution.
   * No automatic retry is possible.
   *
   * **`PAYMENT_STATUS_CANCELLED`: Terminal.** The end user cancelled the payment during
   * authorisation.
   *
   * Standing-order statuses:
   *
   * **`PAYMENT_STATUS_ESTABLISHED`: Terminal.** A recurring/standing order has been successfully
   * created.
   *
   * Deprecated (to be removed in a future release):
   *
   * `PAYMENT_STATUS_UNKNOWN`: The payment status is unknown.
   *
   * `PAYMENT_STATUS_PROCESSING`: The payment is currently being processed.
   *
   * `PAYMENT_STATUS_COMPLETED`: Indicates that the standing order has been successfully
   * established.
   */
  status: PaymentInitiationPaymentStatus;
  /** The ID of the recipient */
  recipientId: string;
  /** A reference for the payment. */
  reference: string;
  /** The value of the reference sent to the bank after adjustment to pass bank validation rules. */
  adjustedReference?: string | null;
  /** The date and time of the last time the `status` was updated, in ISO 8601 format */
  lastStatusUpdate: Date;
  /**
   * The schedule that the payment will be executed on. If a schedule is provided, the payment is
   * automatically set up as a standing order. If no schedule is specified, the payment will be
   * executed only once.
   */
  schedule?: ExternalPaymentScheduleGet | null;
  /** Details about external payment refund */
  refundDetails?: ExternalPaymentRefundDetails | null;
  /**
   * An object containing a Bacs account number and sort code. If an IBAN is not provided or if this
   * recipient needs to accept domestic GBP-denominated payments, Bacs data is required.
   */
  bacs: SenderBacsNullable | null;
  /**
   * The International Bank Account Number (IBAN) for the sender, if specified in the
   * `/payment_initiation/payment/create` call.
   */
  iban: string | null;
  /** Refund IDs associated with the payment. */
  refundIds?: string[] | null;
  /** The amount and currency of a payment */
  amountRefunded?: PaymentAmountRefunded | null;
  /**
   * The EMI (E-Money Institution) wallet that this payment is associated with, if any. This wallet
   * is used as an intermediary account to enable Plaid to reconcile the settlement of funds for
   * Payment Initiation requests.
   */
  walletId?: string | null;
  /**
   * Payment scheme. If not specified - the default in the region will be used (e.g.
   * `SEPA_CREDIT_TRANSFER` for EU). In responses, if the scheme is not explicitly specified in the
   * request, this value will be `null`. Using unsupported values will result in a failed payment.
   *
   * `LOCAL_DEFAULT`: The default payment scheme for the selected market and currency will be used.
   *
   * `LOCAL_INSTANT`: The instant payment scheme for the selected market and currency will be used
   * (if applicable). Fees may be applied by the institution.
   *
   * `SEPA_CREDIT_TRANSFER`: The standard payment to a beneficiary within the SEPA area.
   *
   * `SEPA_CREDIT_TRANSFER_INSTANT`: Instant payment within the SEPA area. May involve additional
   * fees and may not be available at some banks.
   */
  scheme?: PaymentScheme | null;
  /**
   * Payment scheme. If not specified - the default in the region will be used (e.g.
   * `SEPA_CREDIT_TRANSFER` for EU). In responses, if the scheme is not explicitly specified in the
   * request, this value will be `null`. Using unsupported values will result in a failed payment.
   *
   * `LOCAL_DEFAULT`: The default payment scheme for the selected market and currency will be used.
   *
   * `LOCAL_INSTANT`: The instant payment scheme for the selected market and currency will be used
   * (if applicable). Fees may be applied by the institution.
   *
   * `SEPA_CREDIT_TRANSFER`: The standard payment to a beneficiary within the SEPA area.
   *
   * `SEPA_CREDIT_TRANSFER_INSTANT`: Instant payment within the SEPA area. May involve additional
   * fees and may not be available at some banks.
   */
  adjustedScheme?: PaymentScheme | null;
  /**
   * The payment consent ID that this payment was initiated with. Is present only when payment was
   * initiated using the payment consent.
   */
  consentId?: string | null;
  /**
   * The transaction ID that this payment is associated with, if any. This is present only when a
   * payment was initiated using virtual accounts.
   */
  transactionId?: string | null;
  /**
   * A unique identifier assigned by Plaid to each payment for tracking and reconciliation purposes.
   *
   * Note: Not all banks handle `end_to_end_id` consistently. To ensure accurate matching, clients
   * should convert both the incoming `end_to_end_id` and the one provided by Plaid to the same case
   * (either lower or upper) before comparison. For virtual account payments, Plaid manages this
   * field automatically.
   */
  endToEndId?: string | null;
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
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const paymentInitiationPaymentGetResponseSchema: Schema<PaymentInitiationPaymentGetResponse> =
  s.object<PaymentInitiationPaymentGetResponse>({
    paymentId: s.string(),
    amount: paymentAmountSchema,
    status: paymentInitiationPaymentStatusSchema,
    recipientId: s.string(),
    reference: s.string(),
    adjustedReference: s.optionalNullable(s.string()),
    lastStatusUpdate: s.dateTime(),
    schedule: s.optionalNullable(s.lazy(() => externalPaymentScheduleGetSchema)),
    refundDetails: s.optionalNullable(s.lazy(() => externalPaymentRefundDetailsSchema)),
    bacs: s.nullable(s.lazy(() => senderBacsNullableSchema)),
    iban: s.nullable(s.string()),
    refundIds: s.optionalNullable(s.array(s.string())),
    amountRefunded: s.optionalNullable(s.lazy(() => paymentAmountRefundedSchema)),
    walletId: s.optionalNullable(s.string()),
    scheme: s.optionalNullable(s.lazy(() => paymentSchemeSchema)),
    adjustedScheme: s.optionalNullable(s.lazy(() => paymentSchemeSchema)),
    consentId: s.optionalNullable(s.string()),
    transactionId: s.optionalNullable(s.string()),
    endToEndId: s.optionalNullable(s.string()),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    requestId: s.string(),
    _keysMap: {
      paymentId: "payment_id",
      recipientId: "recipient_id",
      adjustedReference: "adjusted_reference",
      lastStatusUpdate: "last_status_update",
      refundDetails: "refund_details",
      refundIds: "refund_ids",
      amountRefunded: "amount_refunded",
      walletId: "wallet_id",
      adjustedScheme: "adjusted_scheme",
      consentId: "consent_id",
      transactionId: "transaction_id",
      endToEndId: "end_to_end_id",
      requestId: "request_id",
    },
  });
