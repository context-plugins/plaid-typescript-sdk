import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentAnalysisSchema, type DocumentAnalysis } from "./document-analysis.js";
import { documentStatusSchema, type DocumentStatus } from "./document-status.js";
import {
  physicalDocumentExtractedDataSchema,
  type PhysicalDocumentExtractedData,
} from "./physical-document-extracted-data.js";
import { physicalDocumentImagesSchema, type PhysicalDocumentImages } from "./physical-document-images.js";

export type DocumentaryVerificationDocument = {
  status: DocumentStatus;
  attempt: number;
  images: PhysicalDocumentImages;
  extractedData: PhysicalDocumentExtractedData | null;
  analysis: DocumentAnalysis;
  redactedAt: Date | null;
};

export const documentaryVerificationDocumentSchema: Schema<DocumentaryVerificationDocument> =
  s.object<DocumentaryVerificationDocument>({
    status: documentStatusSchema,
    attempt: s.number(),
    images: physicalDocumentImagesSchema,
    extractedData: s.nullable(s.lazy(() => physicalDocumentExtractedDataSchema)),
    analysis: documentAnalysisSchema,
    redactedAt: s.nullable(s.dateTime()),
    _keysMap: {
      extractedData: "extracted_data",
      redactedAt: "redacted_at",
    },
  });
