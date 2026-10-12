import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";
import { syntheticFraudSchema, type SyntheticFraud } from "./synthetic-fraud.js";

/**
 * Field containing the data used in determining the outcome of the synthetic identity risk check.
 *
 * Contains the following fields:
 *
 * `score` - A score from 0 to 100 indicating the likelihood that the user is a synthetic identity.
 */
export type RiskCheckSyntheticIdentity = {
  /** A score from 0 to 100 indicating the likelihood that the user is a synthetic identity. */
  score: number;
  /** Risk level for the given risk check type. */
  riskLevel?: RiskLevel;
  /** Field containing the data used in determining the outcome of a synthetic fraud risk check. */
  firstPartySyntheticFraud?: SyntheticFraud | null;
  /** Field containing the data used in determining the outcome of a synthetic fraud risk check. */
  thirdPartySyntheticFraud?: SyntheticFraud | null;
};

export const riskCheckSyntheticIdentitySchema: Schema<RiskCheckSyntheticIdentity> =
  s.object<RiskCheckSyntheticIdentity>({
    score: s.int(),
    riskLevel: s.optional(s.lazy(() => riskLevelSchema)),
    firstPartySyntheticFraud: s.optionalNullable(s.lazy(() => syntheticFraudSchema)),
    thirdPartySyntheticFraud: s.optionalNullable(s.lazy(() => syntheticFraudSchema)),
    _keysMap: {
      riskLevel: "risk_level",
      firstPartySyntheticFraud: "first_party_synthetic_fraud",
      thirdPartySyntheticFraud: "third_party_synthetic_fraud",
    },
  });
