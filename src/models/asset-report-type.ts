import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates either a Fast Asset Report, which will contain only current identity and balance
 * information, or a Full Asset Report, which will also contain historical balance information and
 * transaction data.
 */
export const AssetReportType = {
  Full: "FULL",
  Fast: "FAST",
} as const;
export type AssetReportType = (typeof AssetReportType)[keyof typeof AssetReportType] | (string & {});

export const assetReportTypeSchema: EnumSchema<AssetReportType> = s.enumOf<AssetReportType>(AssetReportType);
