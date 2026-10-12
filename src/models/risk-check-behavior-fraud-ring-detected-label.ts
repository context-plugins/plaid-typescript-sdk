import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Field describing the outcome of a fraud ring behavior risk check.
 *
 * `yes` indicates that fraud ring activity was detected.
 *
 * `no` indicates that fraud ring activity was not detected.
 *
 * `no_data` indicates there was not enough information available to give an accurate signal.
 */
export const RiskCheckBehaviorFraudRingDetectedLabel = {
  Yes: "yes",
  No: "no",
  NoData: "no_data",
} as const;
export type RiskCheckBehaviorFraudRingDetectedLabel =
  | (typeof RiskCheckBehaviorFraudRingDetectedLabel)[keyof typeof RiskCheckBehaviorFraudRingDetectedLabel]
  | (string & {});

export const riskCheckBehaviorFraudRingDetectedLabelSchema: EnumSchema<RiskCheckBehaviorFraudRingDetectedLabel> =
  s.enumOf<RiskCheckBehaviorFraudRingDetectedLabel>(RiskCheckBehaviorFraudRingDetectedLabel);
