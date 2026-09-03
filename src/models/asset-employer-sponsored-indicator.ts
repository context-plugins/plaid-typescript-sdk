import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AssetEmployerSponsoredIndicator = {
  Yes: "Yes",
  No: "No",
} as const;
export type AssetEmployerSponsoredIndicator =
  | (typeof AssetEmployerSponsoredIndicator)[keyof typeof AssetEmployerSponsoredIndicator]
  | (string & {});

export const assetEmployerSponsoredIndicatorSchema: EnumSchema<AssetEmployerSponsoredIndicator> =
  s.enumOf<AssetEmployerSponsoredIndicator>(AssetEmployerSponsoredIndicator);
