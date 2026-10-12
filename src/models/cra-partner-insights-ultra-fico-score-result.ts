import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsUltraFicoScoreSchema,
  type CraPartnerInsightsUltraFicoScore,
} from "./cra-partner-insights-ultra-fico-score.js";

/** The result of a single UltraFICO® score generation request. */
export type CraPartnerInsightsUltraFicoScoreResult = {
  /**
   * Client-generated identifier that can be used to correlate scoring requests with their scoring
   * results.
   */
  requestCorrelationId?: string;
  /** FICO-provided identifier that uniquely identifies this score generation request. */
  ficoScoringRequestId?: string;
  /** The calculated UltraFICO® score. */
  ultraficoScore?: CraPartnerInsightsUltraFicoScore | null;
  /** Human-readable description of why the UltraFICO® score could not be computed. */
  errorReason?: string;
  /**
   * FICO exclusion code indicating why an UltraFICO® score could not be computed due to
   * consumer-data conditions (e.g. insufficient account history). `null` when the exclusion code is
   * not set; "0" when a score was produced.
   */
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
