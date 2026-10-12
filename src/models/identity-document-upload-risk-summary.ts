import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Risk summary of an uploaded document. */
export type IdentityDocumentUploadRiskSummary = {
  /**
   * A number between 0 and 100, inclusive, where a score closer to 0 indicates a document is likely
   * to be trustworthy and a score closer to 100 indicates a document is likely to be fraudulent.
   */
  riskScore?: number | null;
};

export const identityDocumentUploadRiskSummarySchema: Schema<IdentityDocumentUploadRiskSummary> =
  s.object<IdentityDocumentUploadRiskSummary>({
    riskScore: s.optionalNullable(s.int()),
    _keysMap: {
      riskScore: "risk_score",
    },
  });
