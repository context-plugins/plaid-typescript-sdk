import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import {
  transferAuthorizationDeviceSchema,
  type TransferAuthorizationDevice,
} from "./transfer-authorization-device.js";
import {
  transferAuthorizationUserInRequestSchema,
  type TransferAuthorizationUserInRequest,
} from "./transfer-authorization-user-in-request.js";
import {
  transferCreditFundsSourceSchema,
  type TransferCreditFundsSource,
} from "./transfer-credit-funds-source.js";
import { transferNetworkSchema, type TransferNetwork } from "./transfer-network.js";
import { transferTypeSchema, type TransferType } from "./transfer-type.js";
import { transferWireDetailsSchema, type TransferWireDetails } from "./transfer-wire-details.js";

/** Defines the request schema for `/transfer/authorization/create` */
export type TransferAuthorizationCreateRequest = {
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
  /** The Plaid `access_token` for the account that will be debited or credited. */
  accessToken: string;
  /**
   * The Plaid `account_id` corresponding to the end-user account that will be debited or credited.
   */
  accountId: string;
  /**
   * Specify the account used to fund the transfer. Should be specified if using legacy funding
   * methods only. If using Plaid Ledger, leave this field blank. Customers can find a list of
   * `funding_account_id`s in the Accounts page of your Plaid Dashboard, under the "Account ID"
   * column. If this field is left blank and you are using legacy funding methods, this will default
   * to the default `funding_account_id` specified during onboarding. Otherwise, Plaid Ledger will
   * be used.
   */
  fundingAccountId?: string | null;
  /**
   * Specify which ledger balance should be used to fund the transfer. You can find a list of
   * `ledger_id`s in the Accounts page of your Plaid Dashboard. If this field is left blank, this
   * will default to the id of the default ledger balance.
   */
  ledgerId?: string | null;
  /**
   * The payment profile token associated with the Payment Profile that will be debited or credited.
   * Required if not using `access_token`.
   */
  paymentProfileToken?: string;
  /**
   * The type of transfer. This will be either `debit` or `credit`. A `debit` indicates a transfer
   * of money into the origination account; a `credit` indicates a transfer of money out of the
   * origination account.
   */
  type: TransferType;
  /**
   * The network or rails used for the transfer.
   *
   * For transfers submitted as `ach` or `same-day-ach`, the Standard ACH cutoff is 8:30 PM Eastern
   * Time.
   *
   * For transfers submitted as `same-day-ach`, the Same Day ACH cutoff is 3:00 PM Eastern Time. It
   * is recommended to send the request 15 minutes prior to the cutoff to ensure that it will be
   * processed in time for submission before the cutoff. If the transfer is processed after this
   * cutoff but before the Standard ACH cutoff, it will be sent over Standard ACH rails and will not
   * incur same-day charges; this will apply to both legs of the transfer if applicable. The
   * transaction limit for a Same Day ACH transfer is $1,000,000. Authorization requests sent with
   * an amount greater than $1,000,000 will fail.
   *
   * For transfers submitted as `rtp`, Plaid will automatically route between the Real-Time Payments
   * (RTP) rail by TCH or FedNow rails as necessary. If a transfer is submitted as `rtp` and the
   * counterparty account is not eligible for RTP, the `/transfer/authorization/create` request will
   * fail with an `INVALID_FIELD` error code. To pre-check to determine whether a counterparty
   * account can support RTP, call `/transfer/capabilities/get` before calling
   * `/transfer/authorization/create`.
   *
   * Wire transfers are currently in early availability. To request access to `wire` as a payment
   * network, contact your account manager. For transfers submitted as `wire`, the `type` must be
   * `credit`; wire debits are not supported. The cutoff to submit a wire payment is 6:30 PM Eastern
   * Time on a business day; wires submitted after that time will be processed on the next business
   * day. The transaction limit for a wire is $999,999.99. Authorization requests sent with an
   * amount greater than $999,999.99 will fail.
   *
   * Support for `rfp` (request for payment) is currently in closed beta. To learn more, contact
   * your Plaid account manager. For transfers submitted as `rfp`, the `type` must be `debit`.
   */
  network: TransferNetwork;
  /**
   * The amount of the transfer (decimal string with two digits of precision e.g. "10.00"). When
   * calling `/transfer/authorization/create`, specify the maximum amount to authorize. When calling
   * `/transfer/create`, specify the exact amount of the transfer, up to a maximum of the amount
   * authorized. If this field is left blank when calling `/transfer/create`, the maximum amount
   * authorized in the `authorization_id` will be sent.
   */
  amount: string;
  /**
   * Specifies the use case of the transfer. Required for transfers on an ACH network. For more
   * details, see [ACH SEC
   * codes](https://plaid.com/docs/transfer/creating-transfers/#ach-sec-codes).
   *
   * Codes supported for credits: `ccd`, `ppd` Codes supported for debits: `ccd`, `ppd`, `tel`,
   * `web`
   *
   * `"ccd"` - Corporate Credit or Debit - fund transfer between two corporate bank accounts
   *
   * `"ppd"` - Prearranged Payment or Deposit - The transfer is part of a pre-existing relationship
   * with a consumer. Authorization was obtained in writing either in person or via an electronic
   * document signing, e.g. Docusign, by the consumer. Can be used for credits or debits.
   *
   * `"web"` - Internet-Initiated Entry. The transfer debits a consumer's bank account.
   * Authorization from the consumer is obtained over the Internet (e.g. a web or mobile
   * application). Can be used for single debits or recurring debits.
   *
   * `"tel"` - Telephone-Initiated Entry. The transfer debits a consumer. Debit authorization has
   * been received orally over the telephone via a recorded call.
   */
  achClass?: AchClass;
  /** Information specific to wire transfers. */
  wireDetails?: TransferWireDetails | null;
  /**
   * The legal name and other information for the account holder. If the account has multiple
   * account holders, provide the information for the account holder on whose behalf the
   * authorization is being requested. The `user.legal_name` field is required. Other fields are not
   * currently used and are present to support planned future functionality.
   */
  user: TransferAuthorizationUserInRequest;
  /**
   * Information about the device being used to initiate the authorization. These fields are not
   * currently incorporated into the risk check.
   */
  device?: TransferAuthorizationDevice;
  /**
   * Plaid's unique identifier for the origination account for this authorization. If not specified,
   * the default account will be used.
   *
   * @deprecated
   */
  originationAccountId?: string;
  /** The currency of the transfer amount. The default value is "USD". */
  isoCurrencyCode?: string;
  /**
   * A random key provided by the client, per unique authorization, which expires after 48 hours.
   * Maximum of 50 characters.
   *
   * The API supports idempotency for safely retrying requests without accidentally performing the
   * same operation twice. For example, if a request to create an authorization fails due to a
   * network connection error, you can retry the request with the same idempotency key to guarantee
   * that only a single authorization is created.
   *
   * Idempotency does not apply to authorizations whose decisions are `user_action_required`.
   * Therefore you may re-attempt the authorization after completing the required user action
   * without changing `idempotency_key`.
   *
   * This idempotency key expires after 48 hours, after which the same key can be reused. Failure to
   * provide this key may result in duplicate charges.
   */
  idempotencyKey?: string | null;
  /**
   * If the end user is initiating the specific transfer themselves via an interactive UI, this
   * should be `true`; for automatic recurring payments where the end user is not actually
   * initiating each individual transfer, it should be `false`. This field is not currently used and
   * is present to support planned future functionality.
   */
  userPresent?: boolean | null;
  /**
   * If set to `false`, Plaid will not offer a `guarantee_decision` for this request (Guarantee
   * customers only). This field is deprecated in favor of `guarantee`.
   *
   * @deprecated
   *
   * @default true
   */
  withGuarantee?: boolean | null;
  /**
   * Indicates whether the transfer should be evaluated for guarantee coverage. When set to `true`,
   * Plaid assesses the transfer for guarantee coverage and returns a decision in the authorization
   * response. When omitted or set to `false`, the authorization is evaluated without guarantee
   * coverage.
   */
  requestGuarantee?: boolean | null;
  /**
   * The unique identifier returned by Plaid's
   * [beacon](https://plaid.com/docs/transfer/guarantee/#using-a-beacon) when it is run on your
   * webpage.
   *
   * @deprecated
   */
  beaconSessionId?: string | null;
  /**
   * The Plaid client ID that is the originator of this transfer. Only needed if creating transfers
   * on behalf of another client as a [Platform
   * customer](https://plaid.com/docs/transfer/application/#originators-vs-platforms).
   */
  originatorClientId?: string | null;
  /**
   * @deprecated
   */
  creditFundsSource?: TransferCreditFundsSource | null;
  /**
   * Plaid's unique identifier for a test clock. This field may only be used when using `sandbox`
   * environment. If provided, the `authorization` is created at the `virtual_time` on the provided
   * test clock.
   */
  testClockId?: string | null;
  /**
   * The key of the Ruleset for the transaction. If not provided, Signal will use the `default`
   * ruleset.
   */
  rulesetKey?: string | null;
  /**
   * A free-form map of client-supplied risk-relevant context for this authorization. Plaid may use
   * these attributes to inform future versions of our risk models.
   *
   * The following limitations apply: Keys must match the regular expression
   * `^[A-Za-z0-9_.-]{1,40}$` Values must be strings (no nested objects, arrays, numbers, or
   * booleans allowed; stringify non-string values client-side) Maximum of 50 key/value pairs
   * Maximum value length of 500 characters
   *
   * Do not include personally identifiable information or other sensitive data.
   */
  customAttributes?: Record<string, string> | null;
};

export const transferAuthorizationCreateRequestSchema: Schema<TransferAuthorizationCreateRequest> =
  s.object<TransferAuthorizationCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    accountId: s.string(),
    fundingAccountId: s.optionalNullable(s.string()),
    ledgerId: s.optionalNullable(s.string()),
    paymentProfileToken: s.optional(s.string()),
    type: transferTypeSchema,
    network: transferNetworkSchema,
    amount: s.string(),
    achClass: s.optional(s.lazy(() => achClassSchema)),
    wireDetails: s.optionalNullable(s.lazy(() => transferWireDetailsSchema)),
    user: transferAuthorizationUserInRequestSchema,
    device: s.optional(s.lazy(() => transferAuthorizationDeviceSchema)),
    originationAccountId: s.optional(s.string()),
    isoCurrencyCode: s.optional(s.string()),
    idempotencyKey: s.optionalNullable(s.string()),
    userPresent: s.optionalNullable(s.boolean()),
    withGuarantee: s.defaulted(s.nullable(s.boolean()), true),
    requestGuarantee: s.optionalNullable(s.boolean()),
    beaconSessionId: s.optionalNullable(s.string()),
    originatorClientId: s.optionalNullable(s.string()),
    creditFundsSource: s.optionalNullable(s.lazy(() => transferCreditFundsSourceSchema)),
    testClockId: s.optionalNullable(s.string()),
    rulesetKey: s.optionalNullable(s.string()),
    customAttributes: s.optionalNullable(s.record(s.string(), s.string())),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      accountId: "account_id",
      fundingAccountId: "funding_account_id",
      ledgerId: "ledger_id",
      paymentProfileToken: "payment_profile_token",
      achClass: "ach_class",
      wireDetails: "wire_details",
      originationAccountId: "origination_account_id",
      isoCurrencyCode: "iso_currency_code",
      idempotencyKey: "idempotency_key",
      userPresent: "user_present",
      withGuarantee: "with_guarantee",
      requestGuarantee: "request_guarantee",
      beaconSessionId: "beacon_session_id",
      originatorClientId: "originator_client_id",
      creditFundsSource: "credit_funds_source",
      testClockId: "test_clock_id",
      rulesetKey: "ruleset_key",
      customAttributes: "custom_attributes",
    },
  });
