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

/** Additional information for the `risk_check` step. */
export type RiskCheckDetails = {
  /** The status of a step in the Identity Verification process. */
  status: IdentityVerificationStepStatus;
  /**
   * Result summary object specifying values for `behavior` attributes of risk check, when
   * available.
   */
  behavior: RiskCheckBehavior | null;
  /** Result summary object specifying values for `email` attributes of risk check. */
  email: RiskCheckEmail | null;
  /** Result summary object specifying values for `phone` attributes of risk check. */
  phone: RiskCheckPhone | null;
  /** Array of result summary objects specifying values for `device` attributes of risk check. */
  devices: RiskCheckDevice[];
  /**
   * Result summary object capturing abuse signals related to `identity abuse`, e.g. stolen and
   * synthetic identity fraud. These attributes are only available for US identities and some
   * signals may not be available depending on what information was collected.
   */
  identityAbuseSignals: RiskCheckIdentityAbuseSignals | null;
  /** Result summary object specifying values for network attributes of risk check. */
  network?: RiskCheckNetwork | null;
  /** The attributes related to the facial duplicates captured in risk check. */
  facialDuplicates: RiskCheckFacialDuplicate[];
  /** The trust index score for the `risk_check` step. */
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
  trustIndexScore: s.nullable(s.int()),
  _keysMap: {
    identityAbuseSignals: "identity_abuse_signals",
    facialDuplicates: "facial_duplicates",
    trustIndexScore: "trust_index_score",
  },
});
