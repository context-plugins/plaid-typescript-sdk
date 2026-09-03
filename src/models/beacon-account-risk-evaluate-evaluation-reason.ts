import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BeaconAccountRiskEvaluateEvaluationReason = {
  Onboarding: "ONBOARDING",
  NewAccount: "NEW_ACCOUNT",
  InformationChange: "INFORMATION_CHANGE",
  DormantUser: "DORMANT_USER",
  Other: "OTHER",
} as const;
export type BeaconAccountRiskEvaluateEvaluationReason =
  | (typeof BeaconAccountRiskEvaluateEvaluationReason)[keyof typeof BeaconAccountRiskEvaluateEvaluationReason]
  | (string & {});

export const beaconAccountRiskEvaluateEvaluationReasonSchema: EnumSchema<BeaconAccountRiskEvaluateEvaluationReason> =
  s.enumOf<BeaconAccountRiskEvaluateEvaluationReason>(BeaconAccountRiskEvaluateEvaluationReason);
