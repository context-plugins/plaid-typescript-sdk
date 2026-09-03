import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentRiskSignalSchema, type DocumentRiskSignal } from "./document-risk-signal.js";
import {
  riskSignalDocumentReferenceSchema,
  type RiskSignalDocumentReference,
} from "./risk-signal-document-reference.js";

export type MultiDocumentRiskSignal = {
  documentReferences: RiskSignalDocumentReference[];
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
