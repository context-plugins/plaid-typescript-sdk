import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";
import { syntheticFraudSchema, type SyntheticFraud } from "./synthetic-fraud.js";

export type RiskCheckSyntheticIdentity = {
  score: number;
  riskLevel?: RiskLevel;
  firstPartySyntheticFraud?: SyntheticFraud | null;
  thirdPartySyntheticFraud?: SyntheticFraud | null;
};

export const riskCheckSyntheticIdentitySchema: Schema<RiskCheckSyntheticIdentity> =
  s.object<RiskCheckSyntheticIdentity>({
    score: s.number(),
    riskLevel: s.optional(s.lazy(() => riskLevelSchema)),
    firstPartySyntheticFraud: s.optionalNullable(s.lazy(() => syntheticFraudSchema)),
    thirdPartySyntheticFraud: s.optionalNullable(s.lazy(() => syntheticFraudSchema)),
    _keysMap: {
      riskLevel: "risk_level",
      firstPartySyntheticFraud: "first_party_synthetic_fraud",
      thirdPartySyntheticFraud: "third_party_synthetic_fraud",
    },
  });
