import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A value from a MISMO prescribed list that specifies financial assets in a mortgage loan
 * transaction. Assets may be either liquid or fixed and are associated with a corresponding asset
 * amount.
 */
export const AssetType = {
  CheckingAccount: "CheckingAccount",
  SavingsAccount: "SavingsAccount",
  Investment: "Investment",
  MoneyMarketFund: "MoneyMarketFund",
  Other: "Other",
} as const;
export type AssetType = (typeof AssetType)[keyof typeof AssetType] | (string & {});

export const assetTypeSchema: EnumSchema<AssetType> = s.enumOf<AssetType>(AssetType);
