import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvestmentTransactionType = {
  Buy: "buy",
  Sell: "sell",
  Cancel: "cancel",
  Cash: "cash",
  Fee: "fee",
  Transfer: "transfer",
} as const;
export type InvestmentTransactionType =
  | (typeof InvestmentTransactionType)[keyof typeof InvestmentTransactionType]
  | (string & {});

export const investmentTransactionTypeSchema: EnumSchema<InvestmentTransactionType> =
  s.enumOf<InvestmentTransactionType>(InvestmentTransactionType);
