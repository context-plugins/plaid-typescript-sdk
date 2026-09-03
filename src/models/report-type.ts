import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReportType = {
  Asset: "asset",
} as const;
export type ReportType = (typeof ReportType)[keyof typeof ReportType] | (string & {});

export const reportTypeSchema: EnumSchema<ReportType> = s.enumOf<ReportType>(ReportType);
