import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdentityDocumentMetadata = {
  isAccountNumberMatch?: boolean;
  lastUpdated?: Date;
  uploadedAt?: Date;
};

export const identityDocumentMetadataSchema: Schema<IdentityDocumentMetadata> =
  s.object<IdentityDocumentMetadata>({
    isAccountNumberMatch: s.optional(s.boolean()),
    lastUpdated: s.optional(s.dateTime()),
    uploadedAt: s.optional(s.dateTime()),
    _keysMap: {
      isAccountNumberMatch: "is_account_number_match",
      lastUpdated: "last_updated",
      uploadedAt: "uploaded_at",
    },
  });
