import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Risk level for the given risk check type, when available. */
export const RiskLevelWithNoData = {
  Low: "low",
  Medium: "medium",
  High: "high",
  NoData: "no_data",
} as const;
export type RiskLevelWithNoData =
  | (typeof RiskLevelWithNoData)[keyof typeof RiskLevelWithNoData]
  | (string & {});

export const riskLevelWithNoDataSchema: EnumSchema<RiskLevelWithNoData> =
  s.enumOf<RiskLevelWithNoData>(RiskLevelWithNoData);
