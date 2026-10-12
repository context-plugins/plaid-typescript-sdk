import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  signalScheduleDefaultPaymentMethodSchema,
  type SignalScheduleDefaultPaymentMethod,
} from "./signal-schedule-default-payment-method.js";

/** SignalScheduleRequest defines the request schema for `/signal/schedule` */
export type SignalScheduleRequest = {
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
   * The unique ID that you would like to use to refer to this transaction. For your convenience
   * mapping your internal data, you could use your internal ID/identifier for this transaction. The
   * max length for this field is 36 characters.
   */
  clientTransactionId: string;
  /** The transaction amount, in USD (e.g. `102.05`) */
  amount: number;
  /**
   * The payment method specified in the `default_payment_method` field directly impacts the timing
   * recommendations provided by the API for submitting the debit entry to your processor or ODFI.
   * If unspecified, defaults to `STANDARD_ACH`.
   *
   * `SAME_DAY_ACH`: Same Day ACH (as defined by Nacha). The API assumes the settlement will occur
   * on the same business day if the `/signal/schedule` request is submitted by 6:00 PM UTC. Note:
   * The actual cutoff time can vary depending on your payment processor or ODFI. Nacha has
   * established three processing windows for Same Day ACH (Eastern Time): 10:30 AM, 2:45 PM, and
   * 4:45 PM.
   *
   * `STANDARD_ACH`: Standard ACH (as defined by Nacha), typically settled one to three business
   * days after submission.
   *
   * `MULTIPLE_PAYMENT_METHODS`: Indicates that there is no default debit rail or multiple payment
   * methods are available, and the transaction could use any of them based on customer policy or
   * availability.
   */
  defaultPaymentMethod?: SignalScheduleDefaultPaymentMethod;
};

export const signalScheduleRequestSchema: Schema<SignalScheduleRequest> = s.object<SignalScheduleRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  accessToken: s.string(),
  accountId: s.string(),
  clientTransactionId: s.string(),
  amount: s.float64(),
  defaultPaymentMethod: s.optional(s.lazy(() => signalScheduleDefaultPaymentMethodSchema)),
  _keysMap: {
    clientId: "client_id",
    accessToken: "access_token",
    accountId: "account_id",
    clientTransactionId: "client_transaction_id",
    defaultPaymentMethod: "default_payment_method",
  },
});
