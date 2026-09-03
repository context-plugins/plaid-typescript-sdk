import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdentityDocumentUploadMetadata = {
  documentType?: string | null;
  isAccountNumberMatch?: boolean | null;
  pageCount?: number | null;
  lastUpdated?: Date;
  uploadedAt?: Date;
};

export const identityDocumentUploadMetadataSchema: Schema<IdentityDocumentUploadMetadata> =
  s.object<IdentityDocumentUploadMetadata>({
    documentType: s.optionalNullable(s.string()),
    isAccountNumberMatch: s.optionalNullable(s.boolean()),
    pageCount: s.optionalNullable(s.number()),
    lastUpdated: s.optional(s.dateTime()),
    uploadedAt: s.optional(s.dateTime()),
    _keysMap: {
      documentType: "document_type",
      isAccountNumberMatch: "is_account_number_match",
      pageCount: "page_count",
      lastUpdated: "last_updated",
      uploadedAt: "uploaded_at",
    },
  });
