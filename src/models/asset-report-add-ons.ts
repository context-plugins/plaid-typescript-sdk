import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AssetReportAddOns = {
  Investments: "investments",
  FastAssets: "fast_assets",
} as const;
export type AssetReportAddOns = (typeof AssetReportAddOns)[keyof typeof AssetReportAddOns] | (string & {});

export const assetReportAddOnsSchema: EnumSchema<AssetReportAddOns> =
  s.enumOf<AssetReportAddOns>(AssetReportAddOns);
