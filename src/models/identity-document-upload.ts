import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityDocumentUploadMetadataSchema,
  type IdentityDocumentUploadMetadata,
} from "./identity-document-upload-metadata.js";
import {
  identityDocumentUploadRiskInsightsSchema,
  type IdentityDocumentUploadRiskInsights,
} from "./identity-document-upload-risk-insights.js";

/** Document object with metadata of the uploaded document */
export type IdentityDocumentUpload = {
  /** A UUID identifying the document. */
  documentId?: string;
  /** Metadata pertaining to the document. */
  metadata?: IdentityDocumentUploadMetadata;
  /**
   * Object representing fraud risk data of the uploaded document. Only provided when using Identity
   * Document Upload with Fraud Risk enabled.
   */
  riskInsights?: IdentityDocumentUploadRiskInsights;
};

export const identityDocumentUploadSchema: Schema<IdentityDocumentUpload> = s.object<IdentityDocumentUpload>({
  documentId: s.optional(s.string()),
  metadata: s.optional(s.lazy(() => identityDocumentUploadMetadataSchema)),
  riskInsights: s.optional(s.lazy(() => identityDocumentUploadRiskInsightsSchema)),
  _keysMap: {
    documentId: "document_id",
    riskInsights: "risk_insights",
  },
});
