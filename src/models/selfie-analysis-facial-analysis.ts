import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  selfieAnalysisFacialAnalysisOutcomeSchema,
  type SelfieAnalysisFacialAnalysisOutcome,
} from "./selfie-analysis-facial-analysis-outcome.js";

export type SelfieAnalysisFacialAnalysis = {
  leftEye: SelfieAnalysisFacialAnalysisOutcome;
  rightEye: SelfieAnalysisFacialAnalysisOutcome;
  leftBrow: SelfieAnalysisFacialAnalysisOutcome;
  rightBrow: SelfieAnalysisFacialAnalysisOutcome;
  forehead: SelfieAnalysisFacialAnalysisOutcome;
  middleForehead: SelfieAnalysisFacialAnalysisOutcome;
  nose: SelfieAnalysisFacialAnalysisOutcome;
  philtrum: SelfieAnalysisFacialAnalysisOutcome;
  mouth: SelfieAnalysisFacialAnalysisOutcome;
  jaw: SelfieAnalysisFacialAnalysisOutcome;
  leftCheek: SelfieAnalysisFacialAnalysisOutcome;
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
