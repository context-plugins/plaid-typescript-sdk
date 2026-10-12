import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The version of the credit profile report to retrieve. */
export const CraCreditProfileReportVersion = {
  V1: "v1",
} as const;
export type CraCreditProfileReportVersion =
  | (typeof CraCreditProfileReportVersion)[keyof typeof CraCreditProfileReportVersion]
  | (string & {});

export const craCreditProfileReportVersionSchema: EnumSchema<CraCreditProfileReportVersion> =
  s.enumOf<CraCreditProfileReportVersion>(CraCreditProfileReportVersion);
