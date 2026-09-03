import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { w2Schema, type W2 } from "./w2.js";

export type Taxform = {
  docId?: string;
  documentType: string;
  w2?: W2;
};

export const taxformSchema: Schema<Taxform> = s.object<Taxform>({
  docId: s.optional(s.string()),
  documentType: s.string(),
  w2: s.optional(s.lazy(() => w2Schema)),
  _keysMap: {
    docId: "doc_id",
    documentType: "document_type",
  },
});
