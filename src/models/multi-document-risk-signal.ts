import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentRiskSignalSchema, type DocumentRiskSignal } from "./document-risk-signal.js";
import {
  riskSignalDocumentReferenceSchema,
  type RiskSignalDocumentReference,
} from "./risk-signal-document-reference.js";

/** Object containing risk signals and relevant metadata for a set of uploaded documents */
export type MultiDocumentRiskSignal = {
  /** Array of objects containing attributes that could indicate if a document is fraudulent */
  documentReferences: RiskSignalDocumentReference[];
  /**
   * Array of attributes that indicate whether or not there is fraud risk with a set of documents
   */
  riskSignals: (DocumentRiskSignal | null)[];
};

export const multiDocumentRiskSignalSchema: Schema<MultiDocumentRiskSignal> =
  s.object<MultiDocumentRiskSignal>({
    documentReferences: s.array(s.lazy(() => riskSignalDocumentReferenceSchema)),
    riskSignals: s.array(s.nullable(s.lazy(() => documentRiskSignalSchema))),
    _keysMap: {
      documentReferences: "document_references",
      riskSignals: "risk_signals",
    },
  });
