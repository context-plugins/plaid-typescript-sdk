import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  signalEvaluateCoreAttributesSchema,
  type SignalEvaluateCoreAttributes,
} from "./signal-evaluate-core-attributes.js";
import {
  signalEvaluateRiskProfileSchema,
  type SignalEvaluateRiskProfile,
} from "./signal-evaluate-risk-profile.js";
import { signalEvaluateRulesetSchema, type SignalEvaluateRuleset } from "./signal-evaluate-ruleset.js";
import { signalEvaluateScoresSchema, type SignalEvaluateScores } from "./signal-evaluate-scores.js";
import { signalWarningSchema, type SignalWarning } from "./signal-warning.js";

export type SignalEvaluateResponse = {
  requestId: string;
  scores: SignalEvaluateScores | null;
  coreAttributes?: SignalEvaluateCoreAttributes;
  riskProfile?: SignalEvaluateRiskProfile | null;
  ruleset?: SignalEvaluateRuleset | null;
  warnings: SignalWarning[];
};

export const signalEvaluateResponseSchema: Schema<SignalEvaluateResponse> = s.object<SignalEvaluateResponse>({
  requestId: s.string(),
  scores: s.nullable(s.lazy(() => signalEvaluateScoresSchema)),
  coreAttributes: s.optional(s.lazy(() => signalEvaluateCoreAttributesSchema)),
  riskProfile: s.optionalNullable(s.lazy(() => signalEvaluateRiskProfileSchema)),
  ruleset: s.optionalNullable(s.lazy(() => signalEvaluateRulesetSchema)),
  warnings: s.array(s.lazy(() => signalWarningSchema)),
  _keysMap: {
    requestId: "request_id",
    coreAttributes: "core_attributes",
    riskProfile: "risk_profile",
  },
});
