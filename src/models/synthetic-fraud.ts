import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";

/** Field containing the data used in determining the outcome of a synthetic fraud risk check. */
export type SyntheticFraud = {
  /** Risk level for the given risk check type. */
  riskLevel: RiskLevel;
};

export const syntheticFraudSchema: Schema<SyntheticFraud> = s.object<SyntheticFraud>({
  riskLevel: riskLevelSchema,
  _keysMap: {
    riskLevel: "risk_level",
  },
});
