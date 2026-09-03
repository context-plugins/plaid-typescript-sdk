import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityVerificationStepStatusSchema,
  type IdentityVerificationStepStatus,
} from "./identity-verification-step-status.js";
import { riskCheckBehaviorSchema, type RiskCheckBehavior } from "./risk-check-behavior.js";
import { riskCheckDeviceSchema, type RiskCheckDevice } from "./risk-check-device.js";
import { riskCheckEmailSchema, type RiskCheckEmail } from "./risk-check-email.js";
import {
  riskCheckFacialDuplicateSchema,
  type RiskCheckFacialDuplicate,
} from "./risk-check-facial-duplicate.js";
import {
  riskCheckIdentityAbuseSignalsSchema,
  type RiskCheckIdentityAbuseSignals,
} from "./risk-check-identity-abuse-signals.js";
import { riskCheckNetworkSchema, type RiskCheckNetwork } from "./risk-check-network.js";
import { riskCheckPhoneSchema, type RiskCheckPhone } from "./risk-check-phone.js";

export type RiskCheckDetails = {
  status: IdentityVerificationStepStatus;
  behavior: RiskCheckBehavior | null;
  email: RiskCheckEmail | null;
  phone: RiskCheckPhone | null;
  devices: RiskCheckDevice[];
  identityAbuseSignals: RiskCheckIdentityAbuseSignals | null;
  network?: RiskCheckNetwork | null;
  facialDuplicates: RiskCheckFacialDuplicate[];
  trustIndexScore: number | null;
};

export const riskCheckDetailsSchema: Schema<RiskCheckDetails> = s.object<RiskCheckDetails>({
  status: identityVerificationStepStatusSchema,
  behavior: s.nullable(s.lazy(() => riskCheckBehaviorSchema)),
  email: s.nullable(s.lazy(() => riskCheckEmailSchema)),
  phone: s.nullable(s.lazy(() => riskCheckPhoneSchema)),
  devices: s.array(s.lazy(() => riskCheckDeviceSchema)),
  identityAbuseSignals: s.nullable(s.lazy(() => riskCheckIdentityAbuseSignalsSchema)),
  network: s.optionalNullable(s.lazy(() => riskCheckNetworkSchema)),
  facialDuplicates: s.array(s.lazy(() => riskCheckFacialDuplicateSchema)),
  trustIndexScore: s.nullable(s.number()),
  _keysMap: {
    identityAbuseSignals: "identity_abuse_signals",
    facialDuplicates: "facial_duplicates",
    trustIndexScore: "trust_index_score",
  },
});
