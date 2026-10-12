import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Fees on the account, e.g. commission, bookkeeping, options-related. */
export const FeeType = {
  AccountFee: "account fee",
  Adjustment: "adjustment",
  Dividend: "dividend",
  Interest: "interest",
  InterestReceivable: "interest receivable",
  LongTermCapitalGain: "long-term capital gain",
  LegalFee: "legal fee",
  ManagementFee: "management fee",
  MarginExpense: "margin expense",
  NonQualifiedDividend: "non-qualified dividend",
  NonResidentTax: "non-resident tax",
  QualifiedDividend: "qualified dividend",
  ReturnOfPrincipal: "return of principal",
  ShortTermCapitalGain: "short-term capital gain",
  StockDistribution: "stock distribution",
  Tax: "tax",
  TaxWithheld: "tax withheld",
  TransferFee: "transfer fee",
  TrustFee: "trust fee",
  UnqualifiedGain: "unqualified gain",
} as const;
export type FeeType = (typeof FeeType)[keyof typeof FeeType] | (string & {});

export const feeTypeSchema: EnumSchema<FeeType> = s.enumOf<FeeType>(FeeType);
