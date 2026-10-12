import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  selfieAnalysisFacialAnalysisOutcomeSchema,
  type SelfieAnalysisFacialAnalysisOutcome,
} from "./selfie-analysis-facial-analysis-outcome.js";

/**
 * Analysis of the facial features of the selfie when compared to the face in the uploaded document,
 * if one is present.
 */
export type SelfieAnalysisFacialAnalysis = {
  /** Outcome of the facial analysis for a specific facial feature. */
  leftEye: SelfieAnalysisFacialAnalysisOutcome;
  /** Outcome of the facial analysis for a specific facial feature. */
  rightEye: SelfieAnalysisFacialAnalysisOutcome;
  /** Outcome of the facial analysis for a specific facial feature. */
  leftBrow: SelfieAnalysisFacialAnalysisOutcome;
  /** Outcome of the facial analysis for a specific facial feature. */
  rightBrow: SelfieAnalysisFacialAnalysisOutcome;
  /** Outcome of the facial analysis for a specific facial feature. */
  forehead: SelfieAnalysisFacialAnalysisOutcome;
  /** Outcome of the facial analysis for a specific facial feature. */
  middleForehead: SelfieAnalysisFacialAnalysisOutcome;
  /** Outcome of the facial analysis for a specific facial feature. */
  nose: SelfieAnalysisFacialAnalysisOutcome;
  /** Outcome of the facial analysis for a specific facial feature. */
  philtrum: SelfieAnalysisFacialAnalysisOutcome;
  /** Outcome of the facial analysis for a specific facial feature. */
  mouth: SelfieAnalysisFacialAnalysisOutcome;
  /** Outcome of the facial analysis for a specific facial feature. */
  jaw: SelfieAnalysisFacialAnalysisOutcome;
  /** Outcome of the facial analysis for a specific facial feature. */
  leftCheek: SelfieAnalysisFacialAnalysisOutcome;
  /** Outcome of the facial analysis for a specific facial feature. */
  rightCheek: SelfieAnalysisFacialAnalysisOutcome;
};

export const selfieAnalysisFacialAnalysisSchema: Schema<SelfieAnalysisFacialAnalysis> =
  s.object<SelfieAnalysisFacialAnalysis>({
    leftEye: selfieAnalysisFacialAnalysisOutcomeSchema,
    rightEye: selfieAnalysisFacialAnalysisOutcomeSchema,
    leftBrow: selfieAnalysisFacialAnalysisOutcomeSchema,
    rightBrow: selfieAnalysisFacialAnalysisOutcomeSchema,
    forehead: selfieAnalysisFacialAnalysisOutcomeSchema,
    middleForehead: selfieAnalysisFacialAnalysisOutcomeSchema,
    nose: selfieAnalysisFacialAnalysisOutcomeSchema,
    philtrum: selfieAnalysisFacialAnalysisOutcomeSchema,
    mouth: selfieAnalysisFacialAnalysisOutcomeSchema,
    jaw: selfieAnalysisFacialAnalysisOutcomeSchema,
    leftCheek: selfieAnalysisFacialAnalysisOutcomeSchema,
    rightCheek: selfieAnalysisFacialAnalysisOutcomeSchema,
    _keysMap: {
      leftEye: "left_eye",
      rightEye: "right_eye",
      leftBrow: "left_brow",
      rightBrow: "right_brow",
      middleForehead: "middle_forehead",
      leftCheek: "left_cheek",
      rightCheek: "right_cheek",
    },
  });
