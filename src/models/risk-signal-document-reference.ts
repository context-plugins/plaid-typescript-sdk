import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  riskSignalDocumentStatusSchema,
  type RiskSignalDocumentStatus,
} from "./risk-signal-document-status.js";
import { riskSignalDocumentTypeSchema, type RiskSignalDocumentType } from "./risk-signal-document-type.js";
import { riskSignalFileTypeSchema, type RiskSignalFileType } from "./risk-signal-file-type.js";

/** Object containing metadata for the document */
export type RiskSignalDocumentReference = {
  /** An identifier of the document referenced by the document metadata. */
  documentId?: string | null;
  /** The name of the document */
  documentName?: string;
  /** Status of a document for risk signal analysis */
  status?: RiskSignalDocumentStatus;
  /** Type of a document for risk signal analysis */
  documentType?: RiskSignalDocumentType | null;
  /** The file type for risk signal analysis */
  fileType?: RiskSignalFileType | null;
};

export const riskSignalDocumentReferenceSchema: Schema<RiskSignalDocumentReference> =
  s.object<RiskSignalDocumentReference>({
    documentId: s.optionalNullable(s.string()),
    documentName: s.optional(s.string()),
    status: s.optional(s.lazy(() => riskSignalDocumentStatusSchema)),
    documentType: s.optionalNullable(s.lazy(() => riskSignalDocumentTypeSchema)),
    fileType: s.optionalNullable(s.lazy(() => riskSignalFileTypeSchema)),
    _keysMap: {
      documentId: "document_id",
      documentName: "document_name",
      documentType: "document_type",
      fileType: "file_type",
    },
  });
