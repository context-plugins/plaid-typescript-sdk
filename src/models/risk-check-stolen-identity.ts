import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";

export type RiskCheckStolenIdentity = {
  score: number;
  riskLevel?: RiskLevel;
};

export const riskCheckStolenIdentitySchema: Schema<RiskCheckStolenIdentity> =
  s.object<RiskCheckStolenIdentity>({
    score: s.number(),
    riskLevel: s.optional(s.lazy(() => riskLevelSchema)),
    _keysMap: {
      riskLevel: "risk_level",
    },
  });
