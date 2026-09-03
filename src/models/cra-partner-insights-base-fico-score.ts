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

export type CraPartnerInsightsBaseFicoScore = {
  bureau: CraPartnerInsightsBureau;
  score: number;
  reasonCodes?: string[];
  reasonCode1?: string | null;
  reasonCode2?: string | null;
  reasonCode3?: string | null;
  reasonCode4?: string | null;
  didInquiriesAdverselyAffectScore?: boolean | null;
  baseFicoScoreVersion: CraPartnerInsightsBaseFicoScoreVersion;
};

export const craPartnerInsightsBaseFicoScoreSchema: Schema<CraPartnerInsightsBaseFicoScore> =
  s.object<CraPartnerInsightsBaseFicoScore>({
    bureau: craPartnerInsightsBureauSchema,
    score: s.number(),
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
