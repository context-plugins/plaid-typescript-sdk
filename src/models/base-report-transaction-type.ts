import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
