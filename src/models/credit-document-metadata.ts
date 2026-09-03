import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditDocumentMetadata = {
  name: string;
  documentType: string | null;
  downloadUrl: string | null;
  status: string | null;
  pageCount?: number | null;
  errorMessage?: string | null;
};

export const creditDocumentMetadataSchema: Schema<CreditDocumentMetadata> = s.object<CreditDocumentMetadata>({
  name: s.string(),
  documentType: s.nullable(s.string()),
  downloadUrl: s.nullable(s.string()),
  status: s.nullable(s.string()),
  pageCount: s.optionalNullable(s.number()),
  errorMessage: s.optionalNullable(s.string()),
  _keysMap: {
    documentType: "document_type",
    downloadUrl: "download_url",
    pageCount: "page_count",
    errorMessage: "error_message",
  },
});
