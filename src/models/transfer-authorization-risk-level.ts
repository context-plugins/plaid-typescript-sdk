import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Comprises five risk categories (high risk, medium-high risk, medium risk, medium-low risk, low
 * risk) based on the probability of return
 */
export const TransferAuthorizationRiskLevel = {
  HighRisk: "HIGH_RISK",
  MediumHighRisk: "MEDIUM_HIGH_RISK",
  MediumRisk: "MEDIUM_RISK",
  MediumLowRisk: "MEDIUM_LOW_RISK",
  LowRisk: "LOW_RISK",
} as const;
export type TransferAuthorizationRiskLevel =
  | (typeof TransferAuthorizationRiskLevel)[keyof typeof TransferAuthorizationRiskLevel]
  | (string & {});

export const transferAuthorizationRiskLevelSchema: EnumSchema<TransferAuthorizationRiskLevel> =
  s.enumOf<TransferAuthorizationRiskLevel>(TransferAuthorizationRiskLevel);
