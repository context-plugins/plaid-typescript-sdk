import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditBankIncomeCategory = {
  Salary: "SALARY",
  Unemployment: "UNEMPLOYMENT",
  Cash: "CASH",
  GigEconomy: "GIG_ECONOMY",
  Rental: "RENTAL",
  ChildSupport: "CHILD_SUPPORT",
  Military: "MILITARY",
  Retirement: "RETIREMENT",
  LongTermDisability: "LONG_TERM_DISABILITY",
  BankInterest: "BANK_INTEREST",
  CashDeposit: "CASH_DEPOSIT",
  TransferFromApplication: "TRANSFER_FROM_APPLICATION",
  TaxRefund: "TAX_REFUND",
  BenefitOther: "BENEFIT_OTHER",
  Other: "OTHER",
} as const;
export type CreditBankIncomeCategory =
  | (typeof CreditBankIncomeCategory)[keyof typeof CreditBankIncomeCategory]
  | (string & {});

export const creditBankIncomeCategorySchema: EnumSchema<CreditBankIncomeCategory> =
  s.enumOf<CreditBankIncomeCategory>(CreditBankIncomeCategory);
