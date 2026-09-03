import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aamvaAnalysisSchema, type AamvaAnalysis } from "./aamva-analysis.js";
import {
  documentAuthenticityMatchCodeSchema,
  type DocumentAuthenticityMatchCode,
} from "./document-authenticity-match-code.js";
import { fraudAnalysisDetailsSchema, type FraudAnalysisDetails } from "./fraud-analysis-details.js";
import { humanReviewSchema, type HumanReview } from "./human-review.js";
import { imageQualityDetailsSchema, type ImageQualityDetails } from "./image-quality-details.js";
import { imageQualitySchema, type ImageQuality } from "./image-quality.js";
import {
  physicalDocumentExtractedDataAnalysisSchema,
  type PhysicalDocumentExtractedDataAnalysis,
} from "./physical-document-extracted-data-analysis.js";

export type DocumentAnalysis = {
  authenticity: DocumentAuthenticityMatchCode;
  imageQuality: ImageQuality;
  extractedData: PhysicalDocumentExtractedDataAnalysis | null;
  fraudAnalysisDetails: FraudAnalysisDetails | null;
  imageQualityDetails: ImageQualityDetails | null;
  humanReview?: HumanReview | null;
  aamvaVerification: AamvaAnalysis | null;
};

export const documentAnalysisSchema: Schema<DocumentAnalysis> = s.object<DocumentAnalysis>({
  authenticity: documentAuthenticityMatchCodeSchema,
  imageQuality: imageQualitySchema,
  extractedData: s.nullable(s.lazy(() => physicalDocumentExtractedDataAnalysisSchema)),
  fraudAnalysisDetails: s.nullable(s.lazy(() => fraudAnalysisDetailsSchema)),
  imageQualityDetails: s.nullable(s.lazy(() => imageQualityDetailsSchema)),
  humanReview: s.optionalNullable(s.lazy(() => humanReviewSchema)),
  aamvaVerification: s.nullable(s.lazy(() => aamvaAnalysisSchema)),
  _keysMap: {
    imageQuality: "image_quality",
    extractedData: "extracted_data",
    fraudAnalysisDetails: "fraud_analysis_details",
    imageQualityDetails: "image_quality_details",
    humanReview: "human_review",
    aamvaVerification: "aamva_verification",
  },
});
