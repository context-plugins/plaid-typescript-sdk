import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import { bankTransferNetworkSchema, type BankTransferNetwork } from "./bank-transfer-network.js";
import { bankTransferTypeSchema, type BankTransferType } from "./bank-transfer-type.js";
import { bankTransferUserSchema, type BankTransferUser } from "./bank-transfer-user.js";

/** Defines the request schema for `/bank_transfer/create` */
export type BankTransferCreateRequest = {
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
   * A random key provided by the client, per unique bank transfer. Maximum of 50 characters.
   *
   * The API supports idempotency for safely retrying requests without accidentally performing the
   * same operation twice. For example, if a request to create a bank transfer fails due to a
   * network connection error, you can retry the request with the same idempotency key to guarantee
   * that only a single bank transfer is created.
   */
  idempotencyKey: string;
  /** The Plaid `access_token` for the account that will be debited or credited. */
  accessToken: string;
  /** The Plaid `account_id` for the account that will be debited or credited. */
  accountId: string;
  /**
   * The type of bank transfer. This will be either `debit` or `credit`. A `debit` indicates a
   * transfer of money into the origination account; a `credit` indicates a transfer of money out of
   * the origination account.
   */
  type: BankTransferType;
  /**
   * The network or rails used for the transfer. Valid options are `ach`, `same-day-ach`, or `wire`.
   */
  network: BankTransferNetwork;
  /** The amount of the bank transfer (decimal string with two digits of precision e.g. "10.00"). */
  amount: string;
  /** The currency of the transfer amount - should be set to "USD". */
  isoCurrencyCode: string;
  /** The transfer description. Maximum of 10 characters. */
  description: string;
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
  /** The legal name and other information for the account holder. */
  user: BankTransferUser;
  /**
   * An arbitrary string provided by the client for storage with the bank transfer. May be up to 100
   * characters.
   */
  customTag?: string | null;
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
   */
  originationAccountId?: string | null;
};

export const bankTransferCreateRequestSchema: Schema<BankTransferCreateRequest> =
  s.object<BankTransferCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    idempotencyKey: s.string(),
    accessToken: s.string(),
    accountId: s.string(),
    type: bankTransferTypeSchema,
    network: bankTransferNetworkSchema,
    amount: s.string(),
    isoCurrencyCode: s.string(),
    description: s.string(),
    achClass: s.optional(s.lazy(() => achClassSchema)),
    user: bankTransferUserSchema,
    customTag: s.optionalNullable(s.string()),
    metadata: s.optionalNullable(s.record(s.string(), s.string())),
    originationAccountId: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      idempotencyKey: "idempotency_key",
      accessToken: "access_token",
      accountId: "account_id",
      isoCurrencyCode: "iso_currency_code",
      achClass: "ach_class",
      customTag: "custom_tag",
      originationAccountId: "origination_account_id",
    },
  });
