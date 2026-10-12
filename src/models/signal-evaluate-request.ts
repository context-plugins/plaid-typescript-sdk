import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signalEvaluateDeviceSchema, type SignalEvaluateDevice } from "./signal-evaluate-device.js";
import { signalUserSchema, type SignalUser } from "./signal-user.js";

/** SignalEvaluateRequest defines the request schema for `/signal/evaluate` */
export type SignalEvaluateRequest = {
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
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
  /**
   * The Plaid `account_id` of the account that is the funding source for the proposed transaction.
   * The `account_id` is returned in the `/accounts/get` endpoint as well as the
   * [`onSuccess`](https://plaid.com/docs/link/ios/#link-ios-onsuccess-linkSuccess-metadata-accounts-id)
   * callback metadata.
   *
   * This will return an
   * [`INVALID_ACCOUNT_ID`](https://plaid.com/docs/errors/invalid-input/#invalid_account_id) error
   * if the account has been removed at the bank or if the `account_id` is no longer valid.
   */
  accountId: string;
  /**
   * The unique ID that you would like to use to refer to this evaluation attempt - for example, a
   * payment attempt ID. You will use this later to debug this evaluation, and/or report an ACH
   * return, etc. The max length for this field is 36 characters. The `client_transaction_id` also
   * functions as an idempotency key; calling `/signal/evaluate` with a previously used
   * `client_transaction_id` will return the results of the previous evaluation rather than
   * triggering a fresh evaluation.
   */
  clientTransactionId: string;
  /** The transaction amount, in USD (e.g. `102.05`) */
  amount: number;
  /**
   * `true` if the end user is present while initiating the ACH transfer and the endpoint is being
   * called; `false` otherwise (for example, when the ACH transfer is scheduled and the end user is
   * not present, or you call this endpoint after the ACH transfer but before submitting the Nacha
   * file for ACH processing). When using a Balance-only ruleset, this field is ignored. This field
   * is not currently used as part of Signal Transaction Score evaluations, but may be used in the
   * future.
   *
   * @deprecated
   */
  userPresent?: boolean | null;
  /**
   * A unique ID that identifies the end user in your system. This ID is used to correlate requests
   * by a user with multiple Items. Personally identifiable information, such as an email address or
   * phone number, should not be used in the `client_user_id`.
   */
  clientUserId?: string;
  /**
   * Use `true` if the ACH transaction is a part of recurring schedule (for example, a monthly
   * repayment); `false` otherwise. When using a Balance-only ruleset, this field is ignored.
   */
  isRecurring?: boolean | null;
  /**
   * The default ACH payment method to complete the transaction. When using a Balance-only ruleset,
   * this field is ignored. `SAME_DAY_ACH`: Same Day ACH by Nacha. The debit transaction is
   * processed and settled on the same day. `STANDARD_ACH`: Standard ACH by Nacha.
   * `MULTIPLE_PAYMENT_METHODS`: If there is no default debit rail or there are multiple payment
   * methods. Possible values: `SAME_DAY_ACH`, `STANDARD_ACH`, `MULTIPLE_PAYMENT_METHODS`
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
   * Specifying `risk_profile_key` is deprecated. Please provide `ruleset` instead.
   *
   * @deprecated
   */
  riskProfileKey?: string | null;
  /**
   * The key of the ruleset to use for evaluating this transaction. You can create a ruleset using
   * the Plaid Dashboard, under [Signal->Rules](https://dashboard.plaid.com/signal/risk-profiles).
   * If not provided, for all new customers as of October 15, 2025, the `default` ruleset will be
   * used. For existing Signal Transaction Scores customers as of October 15, 2025, by default, no
   * ruleset will be used if the `ruleset_key` is not provided. For more information, or to opt out
   * of using rulesets, see [Signal Rules](https://plaid.com/docs/signal/signal-rules/).
   */
  rulesetKey?: string | null;
};

export const signalEvaluateRequestSchema: Schema<SignalEvaluateRequest> = s.object<SignalEvaluateRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  accessToken: s.string(),
  accountId: s.string(),
  clientTransactionId: s.string(),
  amount: s.float64(),
  userPresent: s.optionalNullable(s.boolean()),
  clientUserId: s.optional(s.string()),
  isRecurring: s.optionalNullable(s.boolean()),
  defaultPaymentMethod: s.optionalNullable(s.string()),
  user: s.optional(s.lazy(() => signalUserSchema)),
  device: s.optional(s.lazy(() => signalEvaluateDeviceSchema)),
  riskProfileKey: s.optionalNullable(s.string()),
  rulesetKey: s.optionalNullable(s.string()),
  _keysMap: {
    clientId: "client_id",
    accessToken: "access_token",
    accountId: "account_id",
    clientTransactionId: "client_transaction_id",
    userPresent: "user_present",
    clientUserId: "client_user_id",
    isRecurring: "is_recurring",
    defaultPaymentMethod: "default_payment_method",
    riskProfileKey: "risk_profile_key",
    rulesetKey: "ruleset_key",
  },
});
