import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsBaseFicoScoreVersionSchema,
  type CraPartnerInsightsBaseFicoScoreVersion,
} from "./cra-partner-insights-base-fico-score-version.js";
import {
  craPartnerInsightsBureauSchema,
  type CraPartnerInsightsBureau,
} from "./cra-partner-insights-bureau.js";

/** Details about the base FICO score associated with an UltraFICO® scoring request. */
export type CraPartnerInsightsBaseFicoScore = {
  /** The credit bureau that provided the base FICO score. */
  bureau: CraPartnerInsightsBureau;
  /** Numeric value of the base FICO score. */
  score: number;
  /** Reason codes associated with the score, in priority order. May contain up to 4 items. */
  reasonCodes?: string[];
  /**
   * Deprecated. Use `reason_codes` instead. The first reason code associated with the score.
   *
   * @deprecated
   */
  reasonCode1?: string | null;
  /**
   * Deprecated. Use `reason_codes` instead. The second reason code associated with the score.
   *
   * @deprecated
   */
  reasonCode2?: string | null;
  /**
   * Deprecated. Use `reason_codes` instead. The third reason code associated with the score.
   *
   * @deprecated
   */
  reasonCode3?: string | null;
  /**
   * Deprecated. Use `reason_codes` instead. The fourth reason code associated with the score.
   *
   * @deprecated
   */
  reasonCode4?: string | null;
  /**
   * Whether inquiries adversely affected the score but were not represented in one of the four
   * reason codes. Sometimes referred to as the FACTA Flag.
   */
  didInquiriesAdverselyAffectScore?: boolean | null;
  /** The version of the base FICO score model. */
  baseFicoScoreVersion: CraPartnerInsightsBaseFicoScoreVersion;
};

export const craPartnerInsightsBaseFicoScoreSchema: Schema<CraPartnerInsightsBaseFicoScore> =
  s.object<CraPartnerInsightsBaseFicoScore>({
    bureau: craPartnerInsightsBureauSchema,
    score: s.int(),
    reasonCodes: s.optional(s.array(s.string())),
    reasonCode1: s.optionalNullable(s.string()),
    reasonCode2: s.optionalNullable(s.string()),
    reasonCode3: s.optionalNullable(s.string()),
    reasonCode4: s.optionalNullable(s.string()),
    didInquiriesAdverselyAffectScore: s.optionalNullable(s.boolean()),
    baseFicoScoreVersion: craPartnerInsightsBaseFicoScoreVersionSchema,
    _keysMap: {
      reasonCodes: "reason_codes",
      reasonCode1: "reason_code_1",
      reasonCode2: "reason_code_2",
      reasonCode3: "reason_code_3",
      reasonCode4: "reason_code_4",
      didInquiriesAdverselyAffectScore: "did_inquiries_adversely_affect_score",
      baseFicoScoreVersion: "base_fico_score_version",
    },
  });
