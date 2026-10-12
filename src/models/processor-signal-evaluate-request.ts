import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signalEvaluateDeviceSchema, type SignalEvaluateDevice } from "./signal-evaluate-device.js";
import { signalUserSchema, type SignalUser } from "./signal-user.js";

/** ProcessorSignalEvaluateRequest defines the request schema for `/processor/signal/evaluate` */
export type ProcessorSignalEvaluateRequest = {
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
   * The unique ID that you would like to use to refer to this transaction. For your convenience
   * mapping your internal data, you could use your internal ID/identifier for this transaction. The
   * max length for this field is 36 characters.
   */
  clientTransactionId: string;
  /** The transaction amount, in USD (e.g. `102.05`) */
  amount: number;
  /**
   * `true` if the end user is present while initiating the ACH transfer and the endpoint is being
   * called; `false` otherwise (for example, when the ACH transfer is scheduled and the end user is
   * not present, or you call this endpoint after the ACH transfer but before submitting the Nacha
   * file for ACH processing).
   */
  userPresent?: boolean | null;
  /**
   * A unique ID that identifies the end user in your system. This ID is used to correlate requests
   * by a user with multiple Items. Personally identifiable information, such as an email address or
   * phone number, should not be used in the `client_user_id`.
   */
  clientUserId?: string;
  /** **true** if the ACH transaction is a recurring transaction; **false** otherwise. */
  isRecurring?: boolean | null;
  /**
   * The default ACH payment method to complete the transaction. `SAME_DAY_ACH`: Same Day ACH by
   * Nacha. The debit transaction is processed and settled on the same day. `STANDARD_ACH`: Standard
   * ACH by Nacha. `MULTIPLE_PAYMENT_METHODS`: If there is no default debit rail or there are
   * multiple payment methods. Possible values: `SAME_DAY_ACH`, `STANDARD_ACH`,
   * `MULTIPLE_PAYMENT_METHODS`
   */
  defaultPaymentMethod?: string | null;
  /**
   * Details about the end user initiating the transaction (i.e., the account holder). These fields
   * are optional, but strongly recommended to increase the accuracy of results when using Signal
   * Transaction Scores. When using a Balance-only ruleset, if the Signal Addendum has been signed,
   * these fields are ignored; if the Addendum has not been signed, using these fields will result
   * in an error.
   */
  user?: SignalUser;
  /**
   * Details about the end user's device. These fields are optional, but strongly recommended to
   * increase the accuracy of results when using Signal Transaction Scores. When using a
   * Balance-only Ruleset, these fields are ignored if the Signal Addendum has been signed; if it
   * has not been signed, using these fields will result in an error.
   */
  device?: SignalEvaluateDevice;
  /**
   * The key of the ruleset to use for this transaction. You can configure a ruleset using the Plaid
   * Dashboard, under [Signal->Rules](https://dashboard.plaid.com/signal/risk-profiles). If not
   * provided, for customers who began using Signal Transaction Scores before October 15, 2025, by
   * default, no ruleset will be used; for customers who began using Signal Transaction Scores after
   * that date, or for Balance customers, the `default` ruleset will be used. For more details, or
   * to opt out of using a ruleset, see [Signal Rules](https://plaid.com/docs/signal/signal-rules/).
   */
  rulesetKey?: string | null;
};

export const processorSignalEvaluateRequestSchema: Schema<ProcessorSignalEvaluateRequest> =
  s.object<ProcessorSignalEvaluateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    processorToken: s.string(),
    clientTransactionId: s.string(),
    amount: s.float64(),
    userPresent: s.optionalNullable(s.boolean()),
    clientUserId: s.optional(s.string()),
    isRecurring: s.optionalNullable(s.boolean()),
    defaultPaymentMethod: s.optionalNullable(s.string()),
    user: s.optional(s.lazy(() => signalUserSchema)),
    device: s.optional(s.lazy(() => signalEvaluateDeviceSchema)),
    rulesetKey: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
      clientTransactionId: "client_transaction_id",
      userPresent: "user_present",
      clientUserId: "client_user_id",
      isRecurring: "is_recurring",
      defaultPaymentMethod: "default_payment_method",
      rulesetKey: "ruleset_key",
    },
  });
