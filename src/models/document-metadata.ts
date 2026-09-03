import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { docTypeSchema, type DocType } from "./doc-type.js";

export type DocumentMetadata = {
  name?: string;
  status?: string | null;
  docId?: string;
  docType?: DocType;
};

export const documentMetadataSchema: Schema<DocumentMetadata> = s.object<DocumentMetadata>({
  name: s.optional(s.string()),
  status: s.optionalNullable(s.string()),
  docId: s.optional(s.string()),
  docType: s.optional(s.lazy(() => docTypeSchema)),
  _keysMap: {
    docId: "doc_id",
    docType: "doc_type",
  },
});
