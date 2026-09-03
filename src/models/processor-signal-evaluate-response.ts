import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  signalEvaluateCoreAttributesSchema,
  type SignalEvaluateCoreAttributes,
} from "./signal-evaluate-core-attributes.js";
import { signalEvaluateRulesetSchema, type SignalEvaluateRuleset } from "./signal-evaluate-ruleset.js";
import { signalEvaluateScoresSchema, type SignalEvaluateScores } from "./signal-evaluate-scores.js";
import { signalWarningSchema, type SignalWarning } from "./signal-warning.js";

export type ProcessorSignalEvaluateResponse = {
  requestId: string;
  scores: SignalEvaluateScores | null;
  coreAttributes?: SignalEvaluateCoreAttributes;
  ruleset?: SignalEvaluateRuleset | null;
  warnings?: SignalWarning[];
};

export const processorSignalEvaluateResponseSchema: Schema<ProcessorSignalEvaluateResponse> =
  s.object<ProcessorSignalEvaluateResponse>({
    requestId: s.string(),
    scores: s.nullable(s.lazy(() => signalEvaluateScoresSchema)),
    coreAttributes: s.optional(s.lazy(() => signalEvaluateCoreAttributesSchema)),
    ruleset: s.optionalNullable(s.lazy(() => signalEvaluateRulesetSchema)),
    warnings: s.optional(s.array(s.lazy(() => signalWarningSchema))),
    _keysMap: {
      requestId: "request_id",
      coreAttributes: "core_attributes",
    },
  });
