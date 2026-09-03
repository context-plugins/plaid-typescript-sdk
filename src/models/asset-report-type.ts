import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AssetReportType = {
  Full: "FULL",
  Fast: "FAST",
} as const;
export type AssetReportType = (typeof AssetReportType)[keyof typeof AssetReportType] | (string & {});

export const assetReportTypeSchema: EnumSchema<AssetReportType> = s.enumOf<AssetReportType>(AssetReportType);
