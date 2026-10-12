import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsBaseFicoScoreSchema,
  type CraPartnerInsightsBaseFicoScore,
} from "./cra-partner-insights-base-fico-score.js";
import {
  craPartnerInsightsUltraFicoScoreVersionSchema,
  type CraPartnerInsightsUltraFicoScoreVersion,
} from "./cra-partner-insights-ultra-fico-score-version.js";

/** Configuration required to generate a single UltraFICO® score. */
export type CraPartnerInsightsUltraFicoScoreRequest = {
  /** The version of the UltraFICO® score. */
  ultraficoScoreVersion: CraPartnerInsightsUltraFicoScoreVersion;
  /**
   * FICO identifier for a particular scoring request. Should only be provided by FICO as part of
   * the FICO-led flow.
   */
  ficoScoringRequestId?: string;
  /**
   * Client-generated identifier that can be used to correlate scoring requests with their scoring
   * results.
   */
  requestCorrelationId?: string;
  /** Details about the base FICO score associated with an UltraFICO® scoring request. */
  baseFicoScore: CraPartnerInsightsBaseFicoScore;
};

export const craPartnerInsightsUltraFicoScoreRequestSchema: Schema<CraPartnerInsightsUltraFicoScoreRequest> =
  s.object<CraPartnerInsightsUltraFicoScoreRequest>({
    ultraficoScoreVersion: craPartnerInsightsUltraFicoScoreVersionSchema,
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
