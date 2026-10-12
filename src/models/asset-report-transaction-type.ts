import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `digital:` transactions that took place online.
 *
 * `place:` transactions that were made at a physical location.
 *
 * `special:` transactions that relate to banks, e.g. fees or deposits.
 *
 * `unresolved:` transactions that do not fit into the other three types.
 */
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
