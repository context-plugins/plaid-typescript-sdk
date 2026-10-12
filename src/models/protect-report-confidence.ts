import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The confidence level of the incident report. `CONFIRMED` indicates the incident has been verified
 * and definitively occurred.
 *
 * `SUSPECTED` indicates the incident is believed to have occurred but has not been fully verified.
 */
export const ProtectReportConfidence = {
  Confirmed: "CONFIRMED",
  Suspected: "SUSPECTED",
} as const;
export type ProtectReportConfidence =
  | (typeof ProtectReportConfidence)[keyof typeof ProtectReportConfidence]
  | (string & {});

export const protectReportConfidenceSchema: EnumSchema<ProtectReportConfidence> =
  s.enumOf<ProtectReportConfidence>(ProtectReportConfidence);
