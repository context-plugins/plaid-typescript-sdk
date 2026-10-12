import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import { transferDeviceSchema, type TransferDevice } from "./transfer-device.js";
import {
  transferRecurringNetworkSchema,
  type TransferRecurringNetwork,
} from "./transfer-recurring-network.js";
import {
  transferRecurringScheduleSchema,
  type TransferRecurringSchedule,
} from "./transfer-recurring-schedule.js";
import { transferTypeSchema, type TransferType } from "./transfer-type.js";
import { transferUserInRequestSchema, type TransferUserInRequest } from "./transfer-user-in-request.js";

/** Defines the request schema for `/transfer/recurring/create` */
export type TransferRecurringCreateRequest = {
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
   * A random key provided by the client, per unique recurring transfer. Maximum of 50 characters.
   *
   * The API supports idempotency for safely retrying requests without accidentally performing the
   * same operation twice. For example, if a request to create a recurring transfer fails due to a
   * network connection error, you can retry the request with the same idempotency key to guarantee
   * that only a single recurring transfer is created.
   */
  idempotencyKey: string;
  /**
   * The Plaid `account_id` corresponding to the end-user account that will be debited or credited.
   */
  accountId: string;
  /**
   * Specify the account used to fund the transfer. Customers can find a list of
   * `funding_account_id`s in the Accounts page of your Plaid Dashboard, under the "Account ID"
   * column. If this field is left blank, it will default to the default `funding_account_id`
   * specified during onboarding.
   *
   * @deprecated
   */
  fundingAccountId?: string | null;
  /**
   * The type of transfer. This will be either `debit` or `credit`. A `debit` indicates a transfer
   * of money into the origination account; a `credit` indicates a transfer of money out of the
   * origination account.
   */
  type: TransferType;
  /** Networks eligible for recurring transfers. */
  network: TransferRecurringNetwork;
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
  /**
   * The amount of the transfer (decimal string with two digits of precision e.g. "10.00"). When
   * calling `/transfer/authorization/create`, specify the maximum amount to authorize. When calling
   * `/transfer/create`, specify the exact amount of the transfer, up to a maximum of the amount
   * authorized. If this field is left blank when calling `/transfer/create`, the maximum amount
   * authorized in the `authorization_id` will be sent.
   */
  amount: string;
  /**
   * If the end user is initiating the specific transfer themselves via an interactive UI, this
   * should be `true`; for automatic recurring payments where the end user is not actually
   * initiating each individual transfer, it should be `false`.
   */
  userPresent?: boolean | null;
  /**
   * The currency of the transfer amount. The default value is "USD".
   *
   * @deprecated
   */
  isoCurrencyCode?: string;
  /** The description of the recurring transfer. */
  description: string;
  /**
   * Plaid's unique identifier for a test clock. This field may only be used when using the
   * `sandbox` environment. If provided, the created `recurring_transfer` is associated with the
   * `test_clock`. New originations are automatically generated when the associated `test_clock`
   * advances. For more details, see [Simulating recurring
   * transfers](https://plaid.com/docs/transfer/sandbox/#simulating-recurring-transfers).
   */
  testClockId?: string | null;
  /** The schedule that the recurring transfer will be executed on. */
  schedule: TransferRecurringSchedule;
  /** The legal name and other information for the account holder. */
  user: TransferUserInRequest;
  /** Information about the device being used to initiate the authorization. */
  device?: TransferDevice;
};

export const transferRecurringCreateRequestSchema: Schema<TransferRecurringCreateRequest> =
  s.object<TransferRecurringCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    idempotencyKey: s.string(),
    accountId: s.string(),
    fundingAccountId: s.optionalNullable(s.string()),
    type: transferTypeSchema,
    network: transferRecurringNetworkSchema,
    achClass: s.optional(s.lazy(() => achClassSchema)),
    amount: s.string(),
    userPresent: s.optionalNullable(s.boolean()),
    isoCurrencyCode: s.optional(s.string()),
    description: s.string(),
    testClockId: s.optionalNullable(s.string()),
    schedule: transferRecurringScheduleSchema,
    user: transferUserInRequestSchema,
    device: s.optional(s.lazy(() => transferDeviceSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      idempotencyKey: "idempotency_key",
      accountId: "account_id",
      fundingAccountId: "funding_account_id",
      achClass: "ach_class",
      userPresent: "user_present",
      isoCurrencyCode: "iso_currency_code",
      testClockId: "test_clock_id",
    },
  });
