import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Field describing the outcome of a bot detection behavior risk check.
 *
 * `yes` indicates that automated activity was detected.
 *
 * `no` indicates that automated activity was not detected.
 *
 * `no_data` indicates there was not enough information available to give an accurate signal.
 */
export const RiskCheckBehaviorBotDetectedLabel = {
  Yes: "yes",
  No: "no",
  NoData: "no_data",
} as const;
export type RiskCheckBehaviorBotDetectedLabel =
  | (typeof RiskCheckBehaviorBotDetectedLabel)[keyof typeof RiskCheckBehaviorBotDetectedLabel]
  | (string & {});

export const riskCheckBehaviorBotDetectedLabelSchema: EnumSchema<RiskCheckBehaviorBotDetectedLabel> =
  s.enumOf<RiskCheckBehaviorBotDetectedLabel>(RiskCheckBehaviorBotDetectedLabel);
