import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DocumentRiskSummary = {
  riskScore: number | null;
};

export const documentRiskSummarySchema: Schema<DocumentRiskSummary> = s.object<DocumentRiskSummary>({
  riskScore: s.nullable(s.number()),
  _keysMap: {
    riskScore: "risk_score",
  },
});
