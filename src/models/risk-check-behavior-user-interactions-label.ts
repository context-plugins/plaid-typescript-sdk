import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RiskCheckBehaviorUserInteractionsLabel = {
  Genuine: "genuine",
  Neutral: "neutral",
  Risky: "risky",
  NoData: "no_data",
} as const;
export type RiskCheckBehaviorUserInteractionsLabel =
  | (typeof RiskCheckBehaviorUserInteractionsLabel)[keyof typeof RiskCheckBehaviorUserInteractionsLabel]
  | (string & {});

export const riskCheckBehaviorUserInteractionsLabelSchema: EnumSchema<RiskCheckBehaviorUserInteractionsLabel> =
  s.enumOf<RiskCheckBehaviorUserInteractionsLabel>(RiskCheckBehaviorUserInteractionsLabel);
