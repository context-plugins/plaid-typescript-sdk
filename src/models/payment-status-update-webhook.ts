import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  paymentInitiationPaymentStatusSchema,
  type PaymentInitiationPaymentStatus,
} from "./payment-initiation-payment-status.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when the status of a payment has changed. For a full explanation of payment statuses and
 * how to handle each, see the [Payment Status
 * guide](https://plaid.com/docs/payment-initiation/payment-status/).
 *
 * Note: For standard Payment Initiation, Plaid payment statuses do not constitute proof that funds
 * have arrived in the recipient's account, and you should not use `new_payment_status` to confirm
 * fund settlement. For options that provide confirmation of fund receipt, see [Virtual
 * Accounts](https://plaid.com/docs/payment-initiation/virtual-accounts/payment-confirmation/).
 */
export type PaymentStatusUpdateWebhook = {
  /** `PAYMENT_INITIATION` */
  webhookType: string;
  /** `PAYMENT_STATUS_UPDATE` */
  webhookCode: string;
  /** The `payment_id` for the payment being updated */
  paymentId: string;
  /**
   * The transaction ID that this payment is associated with, if any. This is present only when a
   * payment was initiated using virtual accounts.
   */
  transactionId?: string | null;
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
  newPaymentStatus: PaymentInitiationPaymentStatus;
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
  oldPaymentStatus: PaymentInitiationPaymentStatus;
  /** The original value of the reference when creating the payment. */
  originalReference: string | null;
  /** The value of the reference sent to the bank after adjustment to pass bank validation rules. */
  adjustedReference?: string | null;
  /**
   * The original value of the `start_date` provided during the creation of a standing order. If the
   * payment is not a standing order, this field will be `null`.
   */
  originalStartDate: string | null;
  /**
   * The start date sent to the bank after adjusting for holidays or weekends. Will be provided in
   * [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). If the start date did not
   * require adjustment, or if the payment is not a standing order, this field will be `null`.
   */
  adjustedStartDate: string | null;
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

export const paymentStatusUpdateWebhookSchema: Schema<PaymentStatusUpdateWebhook> =
  s.object<PaymentStatusUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    paymentId: s.string(),
    transactionId: s.optionalNullable(s.string()),
    newPaymentStatus: paymentInitiationPaymentStatusSchema,
    oldPaymentStatus: paymentInitiationPaymentStatusSchema,
    originalReference: s.nullable(s.string()),
    adjustedReference: s.optionalNullable(s.string()),
    originalStartDate: s.nullable(s.dateOnly()),
    adjustedStartDate: s.nullable(s.dateOnly()),
    timestamp: s.dateTime(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      paymentId: "payment_id",
      transactionId: "transaction_id",
      newPaymentStatus: "new_payment_status",
      oldPaymentStatus: "old_payment_status",
      originalReference: "original_reference",
      adjustedReference: "adjusted_reference",
      originalStartDate: "original_start_date",
      adjustedStartDate: "adjusted_start_date",
    },
  });
