import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  documentRiskSignalInstitutionMetadataSchema,
  type DocumentRiskSignalInstitutionMetadata,
} from "./document-risk-signal-institution-metadata.js";

export type DocumentRiskSignal = {
  type: string | null;
  field: string | null;
  hasFraudRisk: boolean | null;
  institutionMetadata: DocumentRiskSignalInstitutionMetadata | null;
  expectedValue: string | null;
  actualValue: string | null;
  signalDescription: string | null;
  pageNumber: number | null;
};

export const documentRiskSignalSchema: Schema<DocumentRiskSignal> = s.object<DocumentRiskSignal>({
  type: s.nullable(s.string()),
  field: s.nullable(s.string()),
  hasFraudRisk: s.nullable(s.boolean()),
  institutionMetadata: s.nullable(s.lazy(() => documentRiskSignalInstitutionMetadataSchema)),
  expectedValue: s.nullable(s.string()),
  actualValue: s.nullable(s.string()),
  signalDescription: s.nullable(s.string()),
  pageNumber: s.nullable(s.number()),
  _keysMap: {
    hasFraudRisk: "has_fraud_risk",
    institutionMetadata: "institution_metadata",
    expectedValue: "expected_value",
    actualValue: "actual_value",
    signalDescription: "signal_description",
    pageNumber: "page_number",
  },
});
