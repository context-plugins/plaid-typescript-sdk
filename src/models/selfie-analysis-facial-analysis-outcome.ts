import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Outcome of the facial analysis for a specific facial feature. */
export const SelfieAnalysisFacialAnalysisOutcome = {
  Success: "success",
  Failed: "failed",
} as const;
export type SelfieAnalysisFacialAnalysisOutcome =
  | (typeof SelfieAnalysisFacialAnalysisOutcome)[keyof typeof SelfieAnalysisFacialAnalysisOutcome]
  | (string & {});

export const selfieAnalysisFacialAnalysisOutcomeSchema: EnumSchema<SelfieAnalysisFacialAnalysisOutcome> =
  s.enumOf<SelfieAnalysisFacialAnalysisOutcome>(SelfieAnalysisFacialAnalysisOutcome);
