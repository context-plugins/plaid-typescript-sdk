import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Asset Investment Transaction Type Enumerated derived by Vendor. */
export const AssetInvestmentTransactionType = {
  Buy: "Buy",
  Sell: "Sell",
  Dividends: "Dividends",
  Interest: "Interest",
  Transfers: "Transfers",
  Reinvestments: "Reinvestments",
  FundsReceived: "FundsReceived",
  Other: "Other",
} as const;
export type AssetInvestmentTransactionType =
  | (typeof AssetInvestmentTransactionType)[keyof typeof AssetInvestmentTransactionType]
  | (string & {});

export const assetInvestmentTransactionTypeSchema: EnumSchema<AssetInvestmentTransactionType> =
  s.enumOf<AssetInvestmentTransactionType>(AssetInvestmentTransactionType);
