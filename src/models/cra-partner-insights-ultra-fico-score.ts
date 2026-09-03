import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraPartnerInsightsUltraFicoScore = {
  ultraficoScoreVersion: "1.0";
  score: number;
  negativeReasonCodes?: string[];
  positiveReasonCodes?: string[];
  reasonCode1?: string | null;
  reasonCode2?: string | null;
  reasonCode3?: string | null;
  reasonCode4?: string | null;
  positiveReasonCode1?: string | null;
  positiveReasonCode2?: string | null;
  positiveReasonCode3?: string | null;
  positiveReasonCode4?: string | null;
  didInquiriesAdverselyAffectScore?: boolean | null;
};

export const craPartnerInsightsUltraFicoScoreSchema: Schema<CraPartnerInsightsUltraFicoScore> =
  s.object<CraPartnerInsightsUltraFicoScore>({
    ultraficoScoreVersion: s.literal("1.0"),
    score: s.number(),
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
