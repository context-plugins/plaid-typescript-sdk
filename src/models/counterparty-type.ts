import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CounterpartyType = {
  Merchant: "merchant",
  FinancialInstitution: "financial_institution",
  PaymentApp: "payment_app",
  Marketplace: "marketplace",
  PaymentTerminal: "payment_terminal",
  IncomeSource: "income_source",
} as const;
export type CounterpartyType = (typeof CounterpartyType)[keyof typeof CounterpartyType] | (string & {});

export const counterpartyTypeSchema: EnumSchema<CounterpartyType> =
  s.enumOf<CounterpartyType>(CounterpartyType);
