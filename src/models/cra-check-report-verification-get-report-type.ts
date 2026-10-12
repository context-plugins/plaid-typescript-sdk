import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of home lending report. */
export const CraCheckReportVerificationGetReportType = {
  Voa: "VOA",
  EmploymentRefresh: "EMPLOYMENT_REFRESH",
  Income: "INCOME",
} as const;
export type CraCheckReportVerificationGetReportType =
  | (typeof CraCheckReportVerificationGetReportType)[keyof typeof CraCheckReportVerificationGetReportType]
  | (string & {});

export const craCheckReportVerificationGetReportTypeSchema: EnumSchema<CraCheckReportVerificationGetReportType> =
  s.enumOf<CraCheckReportVerificationGetReportType>(CraCheckReportVerificationGetReportType);
