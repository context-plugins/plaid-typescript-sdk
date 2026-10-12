import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityDocumentUploadRiskSignalSchema,
  type IdentityDocumentUploadRiskSignal,
} from "./identity-document-upload-risk-signal.js";
import {
  identityDocumentUploadRiskSummarySchema,
  type IdentityDocumentUploadRiskSummary,
} from "./identity-document-upload-risk-summary.js";

/**
 * Object representing fraud risk data of the uploaded document. Only provided when using Identity
 * Document Upload with Fraud Risk enabled.
 */
export type IdentityDocumentUploadRiskInsights = {
  /** Risk summary of an uploaded document. */
  riskSummary?: IdentityDocumentUploadRiskSummary;
  /** An array of risk signals. */
  riskSignals?: IdentityDocumentUploadRiskSignal[];
};

export const identityDocumentUploadRiskInsightsSchema: Schema<IdentityDocumentUploadRiskInsights> =
  s.object<IdentityDocumentUploadRiskInsights>({
    riskSummary: s.optional(s.lazy(() => identityDocumentUploadRiskSummarySchema)),
    riskSignals: s.optional(s.array(s.lazy(() => identityDocumentUploadRiskSignalSchema))),
    _keysMap: {
      riskSummary: "risk_summary",
      riskSignals: "risk_signals",
    },
  });
