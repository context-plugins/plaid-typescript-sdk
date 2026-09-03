import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SignalEvaluateRiskProfile = {
  key?: string;
  outcome?: string;
};

export const signalEvaluateRiskProfileSchema: Schema<SignalEvaluateRiskProfile> =
  s.object<SignalEvaluateRiskProfile>({
    key: s.optional(s.string()),
    outcome: s.optional(s.string()),
  });
