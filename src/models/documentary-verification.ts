import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  documentaryVerificationDocumentSchema,
  type DocumentaryVerificationDocument,
} from "./documentary-verification-document.js";

export type DocumentaryVerification = {
  status: string;
  documents: DocumentaryVerificationDocument[];
};

export const documentaryVerificationSchema: Schema<DocumentaryVerification> =
  s.object<DocumentaryVerification>({
    status: s.string(),
    documents: s.array(s.lazy(() => documentaryVerificationDocumentSchema)),
  });
