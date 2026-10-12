import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import {
  transferRecurringNetworkSchema,
  type TransferRecurringNetwork,
} from "./transfer-recurring-network.js";
import {
  transferRecurringScheduleSchema,
  type TransferRecurringSchedule,
} from "./transfer-recurring-schedule.js";
import { transferRecurringStatusSchema, type TransferRecurringStatus } from "./transfer-recurring-status.js";
import { transferTypeSchema, type TransferType } from "./transfer-type.js";
import { transferUserInResponseSchema, type TransferUserInResponse } from "./transfer-user-in-response.js";

/** Represents a recurring transfer within the Transfers API. */
export type RecurringTransferNullable = {
  /** Plaid's unique identifier for a recurring transfer. */
  recurringTransferId: string;
  /**
   * The datetime when this transfer was created. This will be of the form `2006-01-02T15:04:05Z`
   */
  created: Date;
  /**
   * A date in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
   *
   * The next transfer origination date after bank holiday adjustment.
   */
  nextOriginationDate: string | null;
  /** Plaid's unique identifier for a test clock. */
  testClockId?: string | null;
  /**
   * The type of transfer. This will be either `debit` or `credit`. A `debit` indicates a transfer
   * of money into the origination account; a `credit` indicates a transfer of money out of the
   * origination account.
   */
  type: TransferType;
  /**
   * The amount of the transfer (decimal string with two digits of precision e.g. "10.00"). When
   * calling `/transfer/authorization/create`, specify the maximum amount to authorize. When calling
   * `/transfer/create`, specify the exact amount of the transfer, up to a maximum of the amount
   * authorized. If this field is left blank when calling `/transfer/create`, the maximum amount
   * authorized in the `authorization_id` will be sent.
   */
  amount: string;
  /**
   * The status of the recurring transfer.
   *
   * `active`: The recurring transfer is currently active. `cancelled`: The recurring transfer was
   * cancelled by the client or Plaid. `expired`: The recurring transfer has completed all
   * originations according to its recurring schedule.
   */
  status: TransferRecurringStatus;
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
  /** Networks eligible for recurring transfers. */
  network: TransferRecurringNetwork;
  /**
   * Plaid's unique identifier for the origination account that was used for this transfer.
   *
   * @deprecated
   */
  originationAccountId: string;
  /**
   * The Plaid `account_id` corresponding to the end-user account that will be debited or credited.
   */
  accountId: string;
  /**
   * The id of the funding account to use, available in the Plaid Dashboard. This determines which
   * of your business checking accounts will be credited or debited.
   */
  fundingAccountId: string;
  /** The currency of the transfer amount, e.g. "USD" */
  isoCurrencyCode: string;
  /** The description of the recurring transfer. */
  description: string;
  /**
   * The created transfer instances associated with this `recurring_transfer_id`. If the recurring
   * transfer has been newly created, this array will be empty.
   */
  transferIds: string[];
  /** The legal name and other information for the account holder. */
  user: TransferUserInResponse;
  /** The schedule that the recurring transfer will be executed on. */
  schedule: TransferRecurringSchedule;
};

export const recurringTransferNullableSchema: Schema<RecurringTransferNullable> =
  s.object<RecurringTransferNullable>({
    recurringTransferId: s.string(),
    created: s.dateTime(),
    nextOriginationDate: s.nullable(s.dateOnly()),
    testClockId: s.optionalNullable(s.string()),
    type: transferTypeSchema,
    amount: s.string(),
    status: transferRecurringStatusSchema,
    achClass: s.optional(s.lazy(() => achClassSchema)),
    network: transferRecurringNetworkSchema,
    originationAccountId: s.string(),
    accountId: s.string(),
    fundingAccountId: s.string(),
    isoCurrencyCode: s.string(),
    description: s.string(),
    transferIds: s.array(s.string()),
    user: transferUserInResponseSchema,
    schedule: transferRecurringScheduleSchema,
    _keysMap: {
      recurringTransferId: "recurring_transfer_id",
      nextOriginationDate: "next_origination_date",
      testClockId: "test_clock_id",
      achClass: "ach_class",
      originationAccountId: "origination_account_id",
      accountId: "account_id",
      fundingAccountId: "funding_account_id",
      isoCurrencyCode: "iso_currency_code",
      transferIds: "transfer_ids",
    },
  });
