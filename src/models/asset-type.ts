import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AssetType = {
  CheckingAccount: "CheckingAccount",
  SavingsAccount: "SavingsAccount",
  Investment: "Investment",
  MoneyMarketFund: "MoneyMarketFund",
  Other: "Other",
} as const;
export type AssetType = (typeof AssetType)[keyof typeof AssetType] | (string & {});

export const assetTypeSchema: EnumSchema<AssetType> = s.enumOf<AssetType>(AssetType);
