import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { w2Schema, type W2 } from "./w2.js";

/** Data about an official document used to report the user's income to the IRS. */
export type Taxform = {
  /** An identifier of the document referenced by the document metadata. */
  docId?: string;
  /** The type of tax document. Currently, the only supported value is `w2`. */
  documentType: string;
  /** W2 is an object that represents income data taken from a W2 tax document. */
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
