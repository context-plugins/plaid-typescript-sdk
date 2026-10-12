import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentRiskSignalSchema, type DocumentRiskSignal } from "./document-risk-signal.js";
import { documentRiskSummarySchema, type DocumentRiskSummary } from "./document-risk-summary.js";
import {
  riskSignalDocumentReferenceSchema,
  type RiskSignalDocumentReference,
} from "./risk-signal-document-reference.js";

/** Object containing all risk signals and relevant metadata for a single document */
export type SingleDocumentRiskSignal = {
  /** Object containing metadata for the document */
  documentReference: RiskSignalDocumentReference;
  /** Array of attributes that indicate whether or not there is fraud risk with a document */
  riskSignals: (DocumentRiskSignal | null)[];
  /** A summary across all risk signals associated with a document */
  riskSummary: DocumentRiskSummary;
};

export const singleDocumentRiskSignalSchema: Schema<SingleDocumentRiskSignal> =
  s.object<SingleDocumentRiskSignal>({
    documentReference: riskSignalDocumentReferenceSchema,
    riskSignals: s.array(s.nullable(s.lazy(() => documentRiskSignalSchema))),
    riskSummary: documentRiskSummarySchema,
    _keysMap: {
      documentReference: "document_reference",
      riskSignals: "risk_signals",
      riskSummary: "risk_summary",
    },
  });
