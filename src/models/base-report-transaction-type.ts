import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `digital:` transactions that took place online.
 *
 * `place:` transactions that were made at a physical location.
 *
 * `special:` transactions that relate to banks, e.g. fees or deposits.
 *
 * `unresolved:` transactions that do not fit into the other types.
 */
export const BaseReportTransactionType = {
  Digital: "digital",
  Place: "place",
  Special: "special",
  Unresolved: "unresolved",
} as const;
export type BaseReportTransactionType =
  | (typeof BaseReportTransactionType)[keyof typeof BaseReportTransactionType]
  | (string & {});

export const baseReportTransactionTypeSchema: EnumSchema<BaseReportTransactionType> =
  s.enumOf<BaseReportTransactionType>(BaseReportTransactionType);
