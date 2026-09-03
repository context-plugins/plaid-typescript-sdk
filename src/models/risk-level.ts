import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RiskLevel = {
  Low: "low",
  Medium: "medium",
  High: "high",
} as const;
export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel] | (string & {});

export const riskLevelSchema: EnumSchema<RiskLevel> = s.enumOf<RiskLevel>(RiskLevel);
