import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the account is employer sponsored retirement account or not (e.g., 401K, 403b, 457,
 * thrift savings plan)
 */
export const AssetEmployerSponsoredIndicator = {
  Yes: "Yes",
  No: "No",
} as const;
export type AssetEmployerSponsoredIndicator =
  | (typeof AssetEmployerSponsoredIndicator)[keyof typeof AssetEmployerSponsoredIndicator]
  | (string & {});

export const assetEmployerSponsoredIndicatorSchema: EnumSchema<AssetEmployerSponsoredIndicator> =
  s.enumOf<AssetEmployerSponsoredIndicator>(AssetEmployerSponsoredIndicator);
