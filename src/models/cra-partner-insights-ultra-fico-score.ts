import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsUltraFicoScoreVersionSchema,
  type CraPartnerInsightsUltraFicoScoreVersion,
} from "./cra-partner-insights-ultra-fico-score-version.js";

/** The calculated UltraFICO® score. */
export type CraPartnerInsightsUltraFicoScore = {
  /** The version of the UltraFICO® score. */
  ultraficoScoreVersion: CraPartnerInsightsUltraFicoScoreVersion;
  /** Numeric value of the UltraFICO® score. */
  score: number;
  /**
   * Negative reason codes associated with the score (reasons the score moved downward), in priority
   * order. May contain up to 4 items.
   */
  negativeReasonCodes?: string[];
  /**
   * Positive reason codes associated with the score (reasons the score moved upward), in priority
   * order. May contain up to 4 items.
   */
  positiveReasonCodes?: string[];
  /**
   * Deprecated. Use `negative_reason_codes` instead. The first reason code associated with the
   * score.
   *
   * @deprecated
   */
  reasonCode1?: string | null;
  /**
   * Deprecated. Use `negative_reason_codes` instead. The second reason code associated with the
   * score.
   *
   * @deprecated
   */
  reasonCode2?: string | null;
  /**
   * Deprecated. Use `negative_reason_codes` instead. The third reason code associated with the
   * score.
   *
   * @deprecated
   */
  reasonCode3?: string | null;
  /**
   * Deprecated. Use `negative_reason_codes` instead. The fourth reason code associated with the
   * score.
   *
   * @deprecated
   */
  reasonCode4?: string | null;
  /**
   * Deprecated. Use `positive_reason_codes` instead. The first positive reason code associated with
   * the score.
   *
   * @deprecated
   */
  positiveReasonCode1?: string | null;
  /**
   * Deprecated. Use `positive_reason_codes` instead. The second positive reason code associated
   * with the score.
   *
   * @deprecated
   */
  positiveReasonCode2?: string | null;
  /**
   * Deprecated. Use `positive_reason_codes` instead. The third positive reason code associated with
   * the score.
   *
   * @deprecated
   */
  positiveReasonCode3?: string | null;
  /**
   * Deprecated. Use `positive_reason_codes` instead. The fourth positive reason code associated
   * with the score.
   *
   * @deprecated
   */
  positiveReasonCode4?: string | null;
  /**
   * Whether inquiries adversely affected the score but were not represented in one of the four
   * reason codes. Sometimes referred to as the FACTA Flag.
   */
  didInquiriesAdverselyAffectScore?: boolean | null;
};

export const craPartnerInsightsUltraFicoScoreSchema: Schema<CraPartnerInsightsUltraFicoScore> =
  s.object<CraPartnerInsightsUltraFicoScore>({
    ultraficoScoreVersion: craPartnerInsightsUltraFicoScoreVersionSchema,
    score: s.int(),
    negativeReasonCodes: s.optional(s.array(s.string())),
    positiveReasonCodes: s.optional(s.array(s.string())),
    reasonCode1: s.optionalNullable(s.string()),
    reasonCode2: s.optionalNullable(s.string()),
    reasonCode3: s.optionalNullable(s.string()),
    reasonCode4: s.optionalNullable(s.string()),
    positiveReasonCode1: s.optionalNullable(s.string()),
    positiveReasonCode2: s.optionalNullable(s.string()),
    positiveReasonCode3: s.optionalNullable(s.string()),
    positiveReasonCode4: s.optionalNullable(s.string()),
    didInquiriesAdverselyAffectScore: s.optionalNullable(s.boolean()),
    _keysMap: {
      ultraficoScoreVersion: "ultrafico_score_version",
      negativeReasonCodes: "negative_reason_codes",
      positiveReasonCodes: "positive_reason_codes",
      reasonCode1: "reason_code_1",
      reasonCode2: "reason_code_2",
      reasonCode3: "reason_code_3",
      reasonCode4: "reason_code_4",
      positiveReasonCode1: "positive_reason_code_1",
      positiveReasonCode2: "positive_reason_code_2",
      positiveReasonCode3: "positive_reason_code_3",
      positiveReasonCode4: "positive_reason_code_4",
      didInquiriesAdverselyAffectScore: "did_inquiries_adversely_affect_score",
    },
  });
