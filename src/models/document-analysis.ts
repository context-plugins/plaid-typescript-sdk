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

/**
 * High level descriptions of how the associated document was processed. If a document fails
 * verification, the details in the `analysis` object should help clarify why the document was
 * rejected.
 */
export type DocumentAnalysis = {
  /**
   * High level summary of whether the document in the provided image matches the formatting rules
   * and security checks for the associated jurisdiction.
   *
   * For example, most identity documents have formatting rules like the following:
   *
   *
   * The image of the person's face must have a certain contrast in order to highlight skin tone
   *
   *
   * The subject in the document's image must remove eye glasses and pose in a certain way
   *
   *
   * The informational fields (name, date of birth, ID number, etc.) must be colored and aligned
   * according to specific rules
   *
   *
   * Security features like watermarks and background patterns must be present
   *
   * So a `match` status for this field indicates that the document in the provided image seems to
   * conform to the various formatting and security rules associated with the detected document.
   */
  authenticity: DocumentAuthenticityMatchCode;
  /**
   * A high level description of the quality of the image the user submitted.
   *
   * For example, an image that is blurry, distorted by glare from a nearby light source, or
   * improperly framed might be marked as low or medium quality. Poor quality images are more likely
   * to fail OCR and/or template conformity checks.
   *
   * Note: By default, Plaid will let a user recapture document images twice before failing the
   * entire session if we attribute the failure to low image quality.
   */
  imageQuality: ImageQuality;
  /** Analysis of the data extracted from the submitted document. */
  extractedData: PhysicalDocumentExtractedDataAnalysis | null;
  /** Details about the fraud analysis performed on the document. */
  fraudAnalysisDetails: FraudAnalysisDetails | null;
  /** Details about the image quality of the document. */
  imageQualityDetails: ImageQualityDetails | null;
  /**
   * Details about the human review check, which refers to a check that is performed by a document
   * specialist.
   */
  humanReview?: HumanReview | null;
  /**
   * Analyzed AAMVA data for the associated hit.
   *
   * Note: This field is only available for U.S. driver's licenses issued by participating states.
   */
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
