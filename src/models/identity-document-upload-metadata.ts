import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Metadata pertaining to the document. */
export type IdentityDocumentUploadMetadata = {
  /** The submitted document type. Currently, this will always be `BANK_STATEMENT`. */
  documentType?: string | null;
  /**
   * Boolean field indicating whether the uploaded document's account number matches the account
   * number we have on file. If `false`, it is not recommended to accept the uploaded identity data
   * as accurate without further verification.
   */
  isAccountNumberMatch?: boolean | null;
  /** The number of pages in the uploaded document. */
  pageCount?: number | null;
  /** The timestamp when the document was last updated. */
  lastUpdated?: Date;
  /** The timestamp when the document was originally uploaded. */
  uploadedAt?: Date;
};

export const identityDocumentUploadMetadataSchema: Schema<IdentityDocumentUploadMetadata> =
  s.object<IdentityDocumentUploadMetadata>({
    documentType: s.optionalNullable(s.string()),
    isAccountNumberMatch: s.optionalNullable(s.boolean()),
    pageCount: s.optionalNullable(s.int()),
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
