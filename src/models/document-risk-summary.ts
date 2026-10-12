import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A summary across all risk signals associated with a document */
export type DocumentRiskSummary = {
  /**
   * A number between 0 and 100, inclusive, where a score closer to 0 indicates a document is likely
   * to be trustworthy and a score closer to 100 indicates a document is likely to be fraudulent.
   * You can automatically reject documents with a high risk score, automatically accept documents
   * with a low risk score, and manually review documents in between. We suggest starting with a
   * threshold of 80 for auto-rejection and 20 for auto-acceptance. As you gather more data points
   * on typical risk scores for your use case, you can tune these parameters to reduce the number of
   * documents undergoing manual review.
   */
  riskScore: number | null;
};

export const documentRiskSummarySchema: Schema<DocumentRiskSummary> = s.object<DocumentRiskSummary>({
  riskScore: s.nullable(s.float64()),
  _keysMap: {
    riskScore: "risk_score",
  },
});
