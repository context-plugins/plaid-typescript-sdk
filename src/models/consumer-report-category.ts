import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of data being disputed by the consumer */
export const ConsumerReportCategory = {
  Transaction: "TRANSACTION",
  Balance: "BALANCE",
  Identity: "IDENTITY",
  Other: "OTHER",
} as const;
export type ConsumerReportCategory =
  | (typeof ConsumerReportCategory)[keyof typeof ConsumerReportCategory]
  | (string & {});

export const consumerReportCategorySchema: EnumSchema<ConsumerReportCategory> =
  s.enumOf<ConsumerReportCategory>(ConsumerReportCategory);
