import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { riskCheckStolenIdentitySchema, type RiskCheckStolenIdentity } from "./risk-check-stolen-identity.js";
import {
  riskCheckSyntheticIdentitySchema,
  type RiskCheckSyntheticIdentity,
} from "./risk-check-synthetic-identity.js";

export type RiskCheckIdentityAbuseSignals = {
  syntheticIdentity: RiskCheckSyntheticIdentity | null;
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
