import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AssetHoldingRestrictedIndicator = {
  Yes: "Yes",
  No: "No",
} as const;
export type AssetHoldingRestrictedIndicator =
  | (typeof AssetHoldingRestrictedIndicator)[keyof typeof AssetHoldingRestrictedIndicator]
  | (string & {});

export const assetHoldingRestrictedIndicatorSchema: EnumSchema<AssetHoldingRestrictedIndicator> =
  s.enumOf<AssetHoldingRestrictedIndicator>(AssetHoldingRestrictedIndicator);
