import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
