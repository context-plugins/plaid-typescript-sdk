import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdentityDocumentUploadRiskSummary = {
  riskScore?: number | null;
};

export const identityDocumentUploadRiskSummarySchema: Schema<IdentityDocumentUploadRiskSummary> =
  s.object<IdentityDocumentUploadRiskSummary>({
    riskScore: s.optionalNullable(s.number()),
    _keysMap: {
      riskScore: "risk_score",
    },
  });
