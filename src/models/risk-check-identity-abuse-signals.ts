import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { riskCheckStolenIdentitySchema, type RiskCheckStolenIdentity } from "./risk-check-stolen-identity.js";
import {
  riskCheckSyntheticIdentitySchema,
  type RiskCheckSyntheticIdentity,
} from "./risk-check-synthetic-identity.js";

/**
 * Result summary object capturing abuse signals related to `identity abuse`, e.g. stolen and
 * synthetic identity fraud. These attributes are only available for US identities and some signals
 * may not be available depending on what information was collected.
 */
export type RiskCheckIdentityAbuseSignals = {
  /**
   * Field containing the data used in determining the outcome of the synthetic identity risk check.
   *
   * Contains the following fields:
   *
   * `score` - A score from 0 to 100 indicating the likelihood that the user is a synthetic
   * identity.
   */
  syntheticIdentity: RiskCheckSyntheticIdentity | null;
  /**
   * Field containing the data used in determining the outcome of the stolen identity risk check.
   *
   * Contains the following fields:
   *
   * `score` - A score from 0 to 100 indicating the likelihood that the user is a stolen identity.
   */
  stolenIdentity: RiskCheckStolenIdentity | null;
};

export const riskCheckIdentityAbuseSignalsSchema: Schema<RiskCheckIdentityAbuseSignals> =
  s.object<RiskCheckIdentityAbuseSignals>({
    syntheticIdentity: s.nullable(s.lazy(() => riskCheckSyntheticIdentitySchema)),
    stolenIdentity: s.nullable(s.lazy(() => riskCheckStolenIdentitySchema)),
    _keysMap: {
      syntheticIdentity: "synthetic_identity",
      stolenIdentity: "stolen_identity",
    },
  });
