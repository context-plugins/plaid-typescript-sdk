import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";

export type SyntheticFraud = {
  riskLevel: RiskLevel;
};

export const syntheticFraudSchema: Schema<SyntheticFraud> = s.object<SyntheticFraud>({
  riskLevel: riskLevelSchema,
  _keysMap: {
    riskLevel: "risk_level",
  },
});
