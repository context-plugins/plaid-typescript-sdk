import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The product type for the credit profile report request. */
export const CraCreditProfileReportType = {
  Qualify: "QUALIFY",
} as const;
export type CraCreditProfileReportType =
  | (typeof CraCreditProfileReportType)[keyof typeof CraCreditProfileReportType]
  | (string & {});

export const craCreditProfileReportTypeSchema: EnumSchema<CraCreditProfileReportType> =
  s.enumOf<CraCreditProfileReportType>(CraCreditProfileReportType);
