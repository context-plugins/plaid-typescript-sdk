import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { selfieAgeCheckSchema, type SelfieAgeCheck } from "./selfie-age-check.js";
import {
  selfieAnalysisDocumentComparisonSchema,
  type SelfieAnalysisDocumentComparison,
} from "./selfie-analysis-document-comparison.js";
import {
  selfieAnalysisFacialAnalysisSchema,
  type SelfieAnalysisFacialAnalysis,
} from "./selfie-analysis-facial-analysis.js";
import {
  selfieAnalysisLivenessCheckSchema,
  type SelfieAnalysisLivenessCheck,
} from "./selfie-analysis-liveness-check.js";

/**
 * High level descriptions of how the associated selfie was processed. If a selfie fails
 * verification, the details in the `analysis` object should help clarify why the selfie was
 * rejected.
 */
export type SelfieAnalysis = {
  /**
   * Information about the comparison between the selfie and the document (if documentary
   * verification also ran).
   */
  documentComparison: SelfieAnalysisDocumentComparison;
  /**
   * Assessment of whether the selfie capture is of a real human being, as opposed to a picture of a
   * human on a screen, a picture of a paper cut out, someone wearing a mask, or a deepfake.
   */
  livenessCheck: SelfieAnalysisLivenessCheck;
  /**
   * Age-estimation results from the selfie capture. This field is `null` when an age range could
   * not be estimated from the selfie capture.
   */
  ageCheck?: SelfieAgeCheck | null;
  /**
   * Analysis of the facial features of the selfie when compared to the face in the uploaded
   * document, if one is present.
   */
  facialAnalysis?: SelfieAnalysisFacialAnalysis | null;
};

export const selfieAnalysisSchema: Schema<SelfieAnalysis> = s.object<SelfieAnalysis>({
  documentComparison: selfieAnalysisDocumentComparisonSchema,
  livenessCheck: selfieAnalysisLivenessCheckSchema,
  ageCheck: s.optionalNullable(s.lazy(() => selfieAgeCheckSchema)),
  facialAnalysis: s.optionalNullable(s.lazy(() => selfieAnalysisFacialAnalysisSchema)),
  _keysMap: {
    documentComparison: "document_comparison",
    livenessCheck: "liveness_check",
    ageCheck: "age_check",
    facialAnalysis: "facial_analysis",
  },
});
