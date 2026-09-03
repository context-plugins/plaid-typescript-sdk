import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { multiDocumentRiskSignalSchema, type MultiDocumentRiskSignal } from "./multi-document-risk-signal.js";
import {
  singleDocumentRiskSignalSchema,
  type SingleDocumentRiskSignal,
} from "./single-document-risk-signal.js";

export type DocumentRiskSignalsObject = {
  accountId: string | null;
  singleDocumentRiskSignals: SingleDocumentRiskSignal[];
  multiDocumentRiskSignals: MultiDocumentRiskSignal[];
};

export const documentRiskSignalsObjectSchema: Schema<DocumentRiskSignalsObject> =
  s.object<DocumentRiskSignalsObject>({
    accountId: s.nullable(s.string()),
    singleDocumentRiskSignals: s.array(s.lazy(() => singleDocumentRiskSignalSchema)),
    multiDocumentRiskSignals: s.array(s.lazy(() => multiDocumentRiskSignalSchema)),
    _keysMap: {
      accountId: "account_id",
      singleDocumentRiskSignals: "single_document_risk_signals",
      multiDocumentRiskSignals: "multi_document_risk_signals",
    },
  });
