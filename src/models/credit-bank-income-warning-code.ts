import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The warning code identifies a specific kind of warning. `IDENTITY_UNAVAILABLE`: Unable to extract
 * identity for the Item `TRANSACTIONS_UNAVAILABLE`: Unable to extract transactions for the Item
 * `ITEM_UNAPPROVED`: User exited flow before giving permission to share data for the Item
 * `REPORT_DELETED`: Report deleted due to customer or consumer request `DATA_UNAVAILABLE`: No
 * relevant data was found for the Item
 */
export const CreditBankIncomeWarningCode = {
  IdentityUnavailable: "IDENTITY_UNAVAILABLE",
  TransactionsUnavailable: "TRANSACTIONS_UNAVAILABLE",
  ItemUnapproved: "ITEM_UNAPPROVED",
  ReportDeleted: "REPORT_DELETED",
  DataUnavailable: "DATA_UNAVAILABLE",
} as const;
export type CreditBankIncomeWarningCode =
  | (typeof CreditBankIncomeWarningCode)[keyof typeof CreditBankIncomeWarningCode]
  | (string & {});

export const creditBankIncomeWarningCodeSchema: EnumSchema<CreditBankIncomeWarningCode> =
  s.enumOf<CreditBankIncomeWarningCode>(CreditBankIncomeWarningCode);
