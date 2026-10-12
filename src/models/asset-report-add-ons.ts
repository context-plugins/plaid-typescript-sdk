import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Add-ons that should be included in the Asset Report.
 *
 * `investments`: The Investments add-on `fast_assets`: The Fast Assets add-on
 */
export const AssetReportAddOns = {
  Investments: "investments",
  FastAssets: "fast_assets",
} as const;
export type AssetReportAddOns = (typeof AssetReportAddOns)[keyof typeof AssetReportAddOns] | (string & {});

export const assetReportAddOnsSchema: EnumSchema<AssetReportAddOns> =
  s.enumOf<AssetReportAddOns>(AssetReportAddOns);
