import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GseReportType = {
  Voa: "VOA",
  EmploymentRefresh: "EMPLOYMENT_REFRESH",
} as const;
export type GseReportType = (typeof GseReportType)[keyof typeof GseReportType] | (string & {});

export const gseReportTypeSchema: EnumSchema<GseReportType> = s.enumOf<GseReportType>(GseReportType);
