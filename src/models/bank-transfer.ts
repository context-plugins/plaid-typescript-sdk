import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import { bankTransferDirectionSchema, type BankTransferDirection } from "./bank-transfer-direction.js";
import { bankTransferFailureSchema, type BankTransferFailure } from "./bank-transfer-failure.js";
import { bankTransferNetworkSchema, type BankTransferNetwork } from "./bank-transfer-network.js";
import { bankTransferStatusSchema, type BankTransferStatus } from "./bank-transfer-status.js";
import { bankTransferTypeSchema, type BankTransferType } from "./bank-transfer-type.js";
import { bankTransferUserSchema, type BankTransferUser } from "./bank-transfer-user.js";

/** Represents a bank transfer within the Bank Transfers API. */
export type BankTransfer = {
  /** Plaid's unique identifier for a bank transfer. */
  id: string;
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
  achClass: AchClass;
  /** The account ID that should be credited/debited for this bank transfer. */
  accountId: string;
  /**
   * The type of bank transfer. This will be either `debit` or `credit`. A `debit` indicates a
   * transfer of money into the origination account; a `credit` indicates a transfer of money out of
   * the origination account.
   */
  type: BankTransferType;
  /** The legal name and other information for the account holder. */
  user: BankTransferUser;
  /** The amount of the bank transfer (decimal string with two digits of precision e.g. "10.00"). */
  amount: string;
  /** The currency of the transfer amount, e.g. "USD" */
  isoCurrencyCode: string;
  /** The description of the transfer. */
  description: string;
  /**
   * The datetime when this bank transfer was created. This will be of the form
   * `2006-01-02T15:04:05Z`
   */
  created: Date;
  /** The status of the transfer. */
  status: BankTransferStatus;
  /**
   * The network or rails used for the transfer. Valid options are `ach`, `same-day-ach`, or `wire`.
   */
  network: BankTransferNetwork;
  /** When `true`, you can still cancel this bank transfer. */
  cancellable: boolean;
  /**
   * The failure reason if the type of this transfer is `"failed"` or `"reversed"`. Null value
   * otherwise.
   */
  failureReason: BankTransferFailure | null;
  /**
   * A string containing the custom tag provided by the client in the create request. Will be null
   * if not provided.
   */
  customTag: string | null;
  /**
   * The Metadata object is a mapping of client-provided string fields to any string value. The
   * following limitations apply: The JSON values must be Strings (no nested JSON objects allowed)
   * Only ASCII characters may be used Maximum of 50 key/value pairs Maximum key length of 40
   * characters Maximum value length of 500 characters
   */
  metadata: Record<string, string> | null;
  /** Plaid's unique identifier for the origination account that was used for this transfer. */
  originationAccountId: string;
  /**
   * Indicates the direction of the transfer: `outbound` for API-initiated transfers, or `inbound`
   * for payments received by the FBO account.
   */
  direction: BankTransferDirection | null;
};

export const bankTransferSchema: Schema<BankTransfer> = s.object<BankTransfer>({
  id: s.string(),
  achClass: achClassSchema,
  accountId: s.string(),
  type: bankTransferTypeSchema,
  user: bankTransferUserSchema,
  amount: s.string(),
  isoCurrencyCode: s.string(),
  description: s.string(),
  created: s.dateTime(),
  status: bankTransferStatusSchema,
  network: bankTransferNetworkSchema,
  cancellable: s.boolean(),
  failureReason: s.nullable(s.lazy(() => bankTransferFailureSchema)),
  customTag: s.nullable(s.string()),
  metadata: s.nullable(s.record(s.string(), s.string())),
  originationAccountId: s.string(),
  direction: s.nullable(s.lazy(() => bankTransferDirectionSchema)),
  _keysMap: {
    achClass: "ach_class",
    accountId: "account_id",
    isoCurrencyCode: "iso_currency_code",
    failureReason: "failure_reason",
    customTag: "custom_tag",
    originationAccountId: "origination_account_id",
  },
});
