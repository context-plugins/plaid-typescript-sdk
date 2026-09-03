import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentRiskSignalSchema, type DocumentRiskSignal } from "./document-risk-signal.js";
import { documentRiskSummarySchema, type DocumentRiskSummary } from "./document-risk-summary.js";
import {
  riskSignalDocumentReferenceSchema,
  type RiskSignalDocumentReference,
} from "./risk-signal-document-reference.js";

export type SingleDocumentRiskSignal = {
  documentReference: RiskSignalDocumentReference;
  riskSignals: (DocumentRiskSignal | null)[];
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
