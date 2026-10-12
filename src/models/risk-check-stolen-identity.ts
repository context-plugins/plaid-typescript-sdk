import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";

/**
 * Field containing the data used in determining the outcome of the stolen identity risk check.
 *
 * Contains the following fields:
 *
 * `score` - A score from 0 to 100 indicating the likelihood that the user is a stolen identity.
 */
export type RiskCheckStolenIdentity = {
  /** A score from 0 to 100 indicating the likelihood that the user is a stolen identity. */
  score: number;
  /** Risk level for the given risk check type. */
  riskLevel?: RiskLevel;
};

export const riskCheckStolenIdentitySchema: Schema<RiskCheckStolenIdentity> =
  s.object<RiskCheckStolenIdentity>({
    score: s.int(),
    riskLevel: s.optional(s.lazy(() => riskLevelSchema)),
    _keysMap: {
      riskLevel: "risk_level",
    },
  });
