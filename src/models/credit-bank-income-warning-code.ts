import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
