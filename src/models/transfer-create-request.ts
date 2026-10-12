import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import { transferNetworkSchema, type TransferNetwork } from "./transfer-network.js";
import { transferTypeSchema, type TransferType } from "./transfer-type.js";
import {
  transferUserInRequestDeprecatedSchema,
  type TransferUserInRequestDeprecated,
} from "./transfer-user-in-request-deprecated.js";

/** Defines the request schema for `/transfer/create` */
export type TransferCreateRequest = {
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
   * Deprecated. `authorization_id` is now used as idempotency instead.
   *
   * A random key provided by the client, per unique transfer. Maximum of 50 characters.
   *
   * The API supports idempotency for safely retrying requests without accidentally performing the
   * same operation twice. For example, if a request to create a transfer fails due to a network
   * connection error, you can retry the request with the same idempotency key to guarantee that
   * only a single transfer is created.
   *
   * @deprecated
   */
  idempotencyKey?: string;
  /** The Plaid `access_token` for the account that will be debited or credited. */
  accessToken: string;
  /**
   * The Plaid `account_id` corresponding to the end-user account that will be debited or credited.
   */
  accountId: string;
  /**
   * Plaid's unique identifier for a transfer authorization. This parameter also serves the purpose
   * of acting as an idempotency identifier.
   */
  authorizationId: string;
  /**
   * @deprecated
   */
  type?: TransferType;
  /**
   * @deprecated
   */
  network?: TransferNetwork;
  /**
   * The amount of the transfer (decimal string with two digits of precision e.g. "10.00"). When
   * calling `/transfer/authorization/create`, specify the maximum amount to authorize. When calling
   * `/transfer/create`, specify the exact amount of the transfer, up to a maximum of the amount
   * authorized. If this field is left blank when calling `/transfer/create`, the maximum amount
   * authorized in the `authorization_id` will be sent.
   */
  amount?: string;
  /**
   * The transfer description, maximum of 15 characters (RTP transactions) or 10 characters (ACH
   * transactions). Should represent why the money is moving, not your company name. For
   * recommendations on setting the `description` field to avoid ACH returns, see [Description field
   * recommendations](https://www.plaid.com/docs/transfer/creating-transfers/#description-field-recommendations).
   *
   * If reprocessing a returned transfer, the `description` field must be `"Retry 1"` or `"Retry
   * 2"`. You may retry a transfer up to 2 times, within 180 days of creating the original transfer.
   * Only transfers that were returned with code `R01` or `R09` may be retried.
   */
  description: string;
  /**
   * @deprecated
   */
  achClass?: AchClass;
  /**
   * The legal name and other information for the account holder.
   *
   * @deprecated
   */
  user?: TransferUserInRequestDeprecated | null;
  /**
   * The Metadata object is a mapping of client-provided string fields to any string value. The
   * following limitations apply: The JSON values must be Strings (no nested JSON objects allowed)
   * Only ASCII characters may be used Maximum of 50 key/value pairs Maximum key length of 40
   * characters Maximum value length of 500 characters
   */
  metadata?: Record<string, string> | null;
  /**
   * Plaid's unique identifier for the origination account for this transfer. If you have more than
   * one origination account, this value must be specified. Otherwise, this field should be left
   * blank.
   *
   * @deprecated
   */
  originationAccountId?: string | null;
  /**
   * The currency of the transfer amount. The default value is "USD".
   *
   * @deprecated
   */
  isoCurrencyCode?: string;
  /**
   * Plaid's unique identifier for a test clock. This field may only be used when using `sandbox`
   * environment. If provided, the `transfer` is created at the `virtual_time` on the provided
   * `test_clock`.
   */
  testClockId?: string | null;
  /**
   * The amount to deduct from `transfer.amount` and distribute to the platform's Ledger balance as
   * a facilitator fee (decimal string with two digits of precision e.g. "10.00"). The remainder
   * will go to the end-customer's Ledger balance. This must be value greater than 0 and less than
   * or equal to the `transfer.amount`.
   */
  facilitatorFee?: string;
};

export const transferCreateRequestSchema: Schema<TransferCreateRequest> = s.object<TransferCreateRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  idempotencyKey: s.optional(s.string()),
  accessToken: s.string(),
  accountId: s.string(),
  authorizationId: s.string(),
  type: s.optional(s.lazy(() => transferTypeSchema)),
  network: s.optional(s.lazy(() => transferNetworkSchema)),
  amount: s.optional(s.string()),
  description: s.string(),
  achClass: s.optional(s.lazy(() => achClassSchema)),
  user: s.optionalNullable(s.lazy(() => transferUserInRequestDeprecatedSchema)),
  metadata: s.optionalNullable(s.record(s.string(), s.string())),
  originationAccountId: s.optionalNullable(s.string()),
  isoCurrencyCode: s.optional(s.string()),
  testClockId: s.optionalNullable(s.string()),
  facilitatorFee: s.optional(s.string()),
  _keysMap: {
    clientId: "client_id",
    idempotencyKey: "idempotency_key",
    accessToken: "access_token",
    accountId: "account_id",
    authorizationId: "authorization_id",
    achClass: "ach_class",
    originationAccountId: "origination_account_id",
    isoCurrencyCode: "iso_currency_code",
    testClockId: "test_clock_id",
    facilitatorFee: "facilitator_fee",
  },
});
