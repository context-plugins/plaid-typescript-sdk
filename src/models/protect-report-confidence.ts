import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProtectReportConfidence = {
  Confirmed: "CONFIRMED",
  Suspected: "SUSPECTED",
} as const;
export type ProtectReportConfidence =
  | (typeof ProtectReportConfidence)[keyof typeof ProtectReportConfidence]
  | (string & {});

export const protectReportConfidenceSchema: EnumSchema<ProtectReportConfidence> =
  s.enumOf<ProtectReportConfidence>(ProtectReportConfidence);
