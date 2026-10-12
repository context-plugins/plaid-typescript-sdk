import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentAnalysisSchema, type DocumentAnalysis } from "./document-analysis.js";
import { documentStatusSchema, type DocumentStatus } from "./document-status.js";
import {
  physicalDocumentExtractedDataSchema,
  type PhysicalDocumentExtractedData,
} from "./physical-document-extracted-data.js";
import { physicalDocumentImagesSchema, type PhysicalDocumentImages } from "./physical-document-images.js";

/** Images, extracted data, and analysis from a user's identity document */
export type DocumentaryVerificationDocument = {
  /**
   * An outcome status for this specific document submission. Distinct from the overall
   * `documentary_verification.status` that summarizes the verification outcome from one or more
   * documents.
   */
  status: DocumentStatus;
  /** The `attempt` field begins with 1 and increments with each subsequent document upload. */
  attempt: number;
  /**
   * URLs for downloading original and cropped images for this document submission. The URLs are
   * designed to only allow downloading, not hot linking, so the URL will only serve the document
   * image for 60 seconds before expiring. The expiration time is 60 seconds after the `GET` request
   * for the associated Identity Verification attempt. A new expiring URL is generated with each
   * request, so you can always rerequest the Identity Verification attempt if one of your URLs
   * expires.
   */
  images: PhysicalDocumentImages;
  /** Data extracted from a user-submitted document. */
  extractedData: PhysicalDocumentExtractedData | null;
  /**
   * High level descriptions of how the associated document was processed. If a document fails
   * verification, the details in the `analysis` object should help clarify why the document was
   * rejected.
   */
  analysis: DocumentAnalysis;
  /** An ISO8601 formatted timestamp. */
  redactedAt: Date | null;
};

export const documentaryVerificationDocumentSchema: Schema<DocumentaryVerificationDocument> =
  s.object<DocumentaryVerificationDocument>({
    status: documentStatusSchema,
    attempt: s.int(),
    images: physicalDocumentImagesSchema,
    extractedData: s.nullable(s.lazy(() => physicalDocumentExtractedDataSchema)),
    analysis: documentAnalysisSchema,
    redactedAt: s.nullable(s.dateTime()),
    _keysMap: {
      extractedData: "extracted_data",
      redactedAt: "redacted_at",
    },
  });
