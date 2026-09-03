import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AssetRetirementIndicator = {
  Yes: "Yes",
  No: "No",
} as const;
export type AssetRetirementIndicator =
  | (typeof AssetRetirementIndicator)[keyof typeof AssetRetirementIndicator]
  | (string & {});

export const assetRetirementIndicatorSchema: EnumSchema<AssetRetirementIndicator> =
  s.enumOf<AssetRetirementIndicator>(AssetRetirementIndicator);
