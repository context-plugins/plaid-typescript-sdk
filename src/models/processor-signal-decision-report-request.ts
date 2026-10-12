import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signalDecisionOutcomeSchema, type SignalDecisionOutcome } from "./signal-decision-outcome.js";
import { signalPaymentMethodSchema, type SignalPaymentMethod } from "./signal-payment-method.js";

/**
 * ProcessorSignalDecisionReportRequest defines the request schema for
 * `/processor/signal/decision/report`
 */
export type ProcessorSignalDecisionReportRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * The processor token obtained from the Plaid integration partner. Processor tokens are in the
   * format: `processor-<environment>-<identifier>`
   */
  processorToken: string;
  /**
   * Must be the same as the `client_transaction_id` supplied when calling
   * `/processor/signal/evaluate`
   */
  clientTransactionId: string;
  /**
   * `true` if the ACH transaction was initiated, `false` otherwise.
   *
   * This field must be returned as a boolean. If formatted incorrectly, this will result in an
   * [`INVALID_FIELD`](https://plaid.com/docs/errors/invalid-request/#invalid_field) error.
   */
  initiated: boolean;
  /**
   * The actual number of days (hold time) since the ACH debit transaction that you wait before
   * making funds available to your customers. The holding time could affect the ACH return rate.
   *
   * For example, use 0 if you make funds available to your customers instantly or the same day
   * following the debit transaction, or 1 if you make funds available the next day following the
   * debit initialization.
   */
  daysFundsOnHold?: number | null;
  /**
   * The payment decision from the risk assessment.
   *
   * `APPROVE`: approve the transaction without requiring further actions from your customers. For
   * example, use this field if you are placing a standard hold for all the approved transactions
   * before making funds available to your customers. You should also use this field if you decide
   * to accelerate the fund availability for your customers.
   *
   * `REVIEW`: the transaction requires manual review
   *
   * `REJECT`: reject the transaction
   *
   * `TAKE_OTHER_RISK_MEASURES`: for example, placing a longer hold on funds than those approved
   * transactions or introducing customer frictions such as step-up verification/authentication
   *
   * `NOT_EVALUATED`: if only logging the results without using them
   */
  decisionOutcome?: SignalDecisionOutcome | null;
  /**
   * The payment method to complete the transaction after the risk assessment. It may be different
   * from the default payment method.
   *
   * `SAME_DAY_ACH`: Same Day ACH by Nacha. The debit transaction is processed and settled on the
   * same day.
   *
   * `STANDARD_ACH`: Standard ACH by Nacha.
   *
   * `MULTIPLE_PAYMENT_METHODS`: if there is no default debit rail or there are multiple payment
   * methods.
   */
  paymentMethod?: SignalPaymentMethod | null;
  /**
   * The amount (in USD) made available to your customers instantly following the debit transaction.
   * It could be a partial amount of the requested transaction (example: 102.05).
   */
  amountInstantlyAvailable?: number | null;
};

export const processorSignalDecisionReportRequestSchema: Schema<ProcessorSignalDecisionReportRequest> =
  s.object<ProcessorSignalDecisionReportRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    processorToken: s.string(),
    clientTransactionId: s.string(),
    initiated: s.boolean(),
    daysFundsOnHold: s.optionalNullable(s.int()),
    decisionOutcome: s.optionalNullable(s.lazy(() => signalDecisionOutcomeSchema)),
    paymentMethod: s.optionalNullable(s.lazy(() => signalPaymentMethodSchema)),
    amountInstantlyAvailable: s.optionalNullable(s.float64()),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
      clientTransactionId: "client_transaction_id",
      daysFundsOnHold: "days_funds_on_hold",
      decisionOutcome: "decision_outcome",
      paymentMethod: "payment_method",
      amountInstantlyAvailable: "amount_instantly_available",
    },
  });
