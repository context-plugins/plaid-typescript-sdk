import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of verification PDF report to fetch. */
export const CraCheckReportVerificationPdfReportType = {
  Voa: "voa",
  EmploymentRefresh: "employment_refresh",
  Income: "income",
} as const;
export type CraCheckReportVerificationPdfReportType =
  | (typeof CraCheckReportVerificationPdfReportType)[keyof typeof CraCheckReportVerificationPdfReportType]
  | (string & {});

export const craCheckReportVerificationPdfReportTypeSchema: EnumSchema<CraCheckReportVerificationPdfReportType> =
  s.enumOf<CraCheckReportVerificationPdfReportType>(CraCheckReportVerificationPdfReportType);
