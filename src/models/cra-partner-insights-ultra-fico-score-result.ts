import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsUltraFicoScoreSchema,
  type CraPartnerInsightsUltraFicoScore,
} from "./cra-partner-insights-ultra-fico-score.js";

export type CraPartnerInsightsUltraFicoScoreResult = {
  requestCorrelationId?: string;
  ficoScoringRequestId?: string;
  ultraficoScore?: CraPartnerInsightsUltraFicoScore | null;
  errorReason?: string;
  exclusionCode?: string | null;
};

export const craPartnerInsightsUltraFicoScoreResultSchema: Schema<CraPartnerInsightsUltraFicoScoreResult> =
  s.object<CraPartnerInsightsUltraFicoScoreResult>({
    requestCorrelationId: s.optional(s.string()),
    ficoScoringRequestId: s.optional(s.string()),
    ultraficoScore: s.optionalNullable(s.lazy(() => craPartnerInsightsUltraFicoScoreSchema)),
    errorReason: s.optional(s.string()),
    exclusionCode: s.optionalNullable(s.string()),
    _keysMap: {
      requestCorrelationId: "request_correlation_id",
      ficoScoringRequestId: "fico_scoring_request_id",
      ultraficoScore: "ultrafico_score",
      errorReason: "error_reason",
      exclusionCode: "exclusion_code",
    },
  });
