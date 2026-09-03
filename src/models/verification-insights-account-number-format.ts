import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VerificationInsightsAccountNumberFormat = {
  Valid: "valid",
  Invalid: "invalid",
  Unknown: "unknown",
} as const;
export type VerificationInsightsAccountNumberFormat =
  | (typeof VerificationInsightsAccountNumberFormat)[keyof typeof VerificationInsightsAccountNumberFormat]
  | (string & {});

export const verificationInsightsAccountNumberFormatSchema: EnumSchema<VerificationInsightsAccountNumberFormat> =
  s.enumOf<VerificationInsightsAccountNumberFormat>(VerificationInsightsAccountNumberFormat);
