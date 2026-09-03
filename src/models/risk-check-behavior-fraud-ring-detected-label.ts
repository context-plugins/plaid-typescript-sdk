import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
