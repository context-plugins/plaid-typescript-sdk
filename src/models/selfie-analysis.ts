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

export type SelfieAnalysis = {
  documentComparison: SelfieAnalysisDocumentComparison;
  livenessCheck: SelfieAnalysisLivenessCheck;
  ageCheck?: SelfieAgeCheck | null;
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
