import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsBaseFicoScoreSchema,
  type CraPartnerInsightsBaseFicoScore,
} from "./cra-partner-insights-base-fico-score.js";

export type CraPartnerInsightsUltraFicoScoreRequest = {
  ultraficoScoreVersion: "1.0";
  ficoScoringRequestId?: string;
  requestCorrelationId?: string;
  baseFicoScore: CraPartnerInsightsBaseFicoScore;
};

export const craPartnerInsightsUltraFicoScoreRequestSchema: Schema<CraPartnerInsightsUltraFicoScoreRequest> =
  s.object<CraPartnerInsightsUltraFicoScoreRequest>({
    ultraficoScoreVersion: s.literal("1.0"),
    ficoScoringRequestId: s.optional(s.string()),
    requestCorrelationId: s.optional(s.string()),
    baseFicoScore: craPartnerInsightsBaseFicoScoreSchema,
    _keysMap: {
      ultraficoScoreVersion: "ultrafico_score_version",
      ficoScoringRequestId: "fico_scoring_request_id",
      requestCorrelationId: "request_correlation_id",
      baseFicoScore: "base_fico_score",
    },
  });
