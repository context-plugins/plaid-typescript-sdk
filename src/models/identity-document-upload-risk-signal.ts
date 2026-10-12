import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Risk signals tied to the document */
export type IdentityDocumentUploadRiskSignal = {
  /** The type of risk found. */
  type?: string | null;
  /** Indicates whether fraud risk was detected for this risk signal. */
  hasFraudRisk?: boolean | null;
  /** A human-readable explanation providing more detail about the specific risk signal. */
  signalDescription?: string | null;
  /**
   * The relevant page associated with the risk signal. If the risk signal is not associated with a
   * specific page, the value will be 0.
   */
  pageNumber?: number | null;
};

export const identityDocumentUploadRiskSignalSchema: Schema<IdentityDocumentUploadRiskSignal> =
  s.object<IdentityDocumentUploadRiskSignal>({
    type: s.optionalNullable(s.string()),
    hasFraudRisk: s.optionalNullable(s.boolean()),
    signalDescription: s.optionalNullable(s.string()),
    pageNumber: s.optionalNullable(s.int()),
    _keysMap: {
      hasFraudRisk: "has_fraud_risk",
      signalDescription: "signal_description",
      pageNumber: "page_number",
    },
  });
