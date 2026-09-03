import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CashType = {
  AccountFee: "account fee",
  Contribution: "contribution",
  Deposit: "deposit",
  Dividend: "dividend",
  StockDistribution: "stock distribution",
  Interest: "interest",
  LegalFee: "legal fee",
  LongTermCapitalGain: "long-term capital gain",
  ManagementFee: "management fee",
  MarginExpense: "margin expense",
  NonQualifiedDividend: "non-qualified dividend",
  NonResidentTax: "non-resident tax",
  PendingCredit: "pending credit",
  PendingDebit: "pending debit",
  QualifiedDividend: "qualified dividend",
  ShortTermCapitalGain: "short-term capital gain",
  Tax: "tax",
  TaxWithheld: "tax withheld",
  TransferFee: "transfer fee",
  TrustFee: "trust fee",
  UnqualifiedGain: "unqualified gain",
  Withdrawal: "withdrawal",
} as const;
export type CashType = (typeof CashType)[keyof typeof CashType] | (string & {});

export const cashTypeSchema: EnumSchema<CashType> = s.enumOf<CashType>(CashType);
