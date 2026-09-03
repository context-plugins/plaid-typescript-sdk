import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdentityDocumentUploadRiskSignal = {
  type?: string | null;
  hasFraudRisk?: boolean | null;
  signalDescription?: string | null;
  pageNumber?: number | null;
};

export const identityDocumentUploadRiskSignalSchema: Schema<IdentityDocumentUploadRiskSignal> =
  s.object<IdentityDocumentUploadRiskSignal>({
    type: s.optionalNullable(s.string()),
    hasFraudRisk: s.optionalNullable(s.boolean()),
    signalDescription: s.optionalNullable(s.string()),
    pageNumber: s.optionalNullable(s.number()),
    _keysMap: {
      hasFraudRisk: "has_fraud_risk",
      signalDescription: "signal_description",
      pageNumber: "page_number",
    },
  });
