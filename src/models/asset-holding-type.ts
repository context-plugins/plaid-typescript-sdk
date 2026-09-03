import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AssetHoldingType = {
  Bond: "Bond",
  Stock: "Stock",
  Crypto: "Crypto",
  Other: "Other",
} as const;
export type AssetHoldingType = (typeof AssetHoldingType)[keyof typeof AssetHoldingType] | (string & {});

export const assetHoldingTypeSchema: EnumSchema<AssetHoldingType> =
  s.enumOf<AssetHoldingType>(AssetHoldingType);
