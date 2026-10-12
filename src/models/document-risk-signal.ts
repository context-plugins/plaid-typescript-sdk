import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  documentRiskSignalInstitutionMetadataSchema,
  type DocumentRiskSignalInstitutionMetadata,
} from "./document-risk-signal-institution-metadata.js";

/** Details about a certain reason as to why a document could potentially be fraudulent. */
export type DocumentRiskSignal = {
  /** The type of risk found in the risk signal check. */
  type: string | null;
  /** The field which the risk signal was computed for */
  field: string | null;
  /**
   * A flag used to quickly identify if the signal indicates that this field is authentic or
   * fraudulent
   */
  hasFraudRisk: boolean | null;
  /**
   * An object which contains additional metadata about the institution used to compute the
   * verification attribute
   */
  institutionMetadata: DocumentRiskSignalInstitutionMetadata | null;
  /** The expected value of the field, as seen on the document */
  expectedValue: string | null;
  /** The derived value obtained in the risk signal calculation process for this field */
  actualValue: string | null;
  /** A human-readable explanation providing more detail into the particular risk signal */
  signalDescription: string | null;
  /**
   * The relevant page associated with the risk signal. If the risk signal is not associated with a
   * specific page, the value will be 0.
   */
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
  pageNumber: s.nullable(s.int()),
  _keysMap: {
    hasFraudRisk: "has_fraud_risk",
    institutionMetadata: "institution_metadata",
    expectedValue: "expected_value",
    actualValue: "actual_value",
    signalDescription: "signal_description",
    pageNumber: "page_number",
  },
});
