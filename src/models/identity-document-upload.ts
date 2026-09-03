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

export type IdentityDocumentUpload = {
  documentId?: string;
  metadata?: IdentityDocumentUploadMetadata;
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
