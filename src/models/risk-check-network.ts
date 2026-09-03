import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";

export type RiskCheckNetwork = {
  riskLevel: RiskLevel;
  factors: string[];
};

export const riskCheckNetworkSchema: Schema<RiskCheckNetwork> = s.object<RiskCheckNetwork>({
  riskLevel: riskLevelSchema,
  factors: s.array(s.string()),
  _keysMap: {
    riskLevel: "risk_level",
  },
});
