import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AssetReportTransactionType = {
  Digital: "digital",
  Place: "place",
  Special: "special",
  Unresolved: "unresolved",
} as const;
export type AssetReportTransactionType =
  | (typeof AssetReportTransactionType)[keyof typeof AssetReportTransactionType]
  | (string & {});

export const assetReportTransactionTypeSchema: EnumSchema<AssetReportTransactionType> =
  s.enumOf<AssetReportTransactionType>(AssetReportTransactionType);
