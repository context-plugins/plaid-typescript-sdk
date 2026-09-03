import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CraPartnerInsightsBureau = {
  Equifax: "EQUIFAX",
  Experian: "EXPERIAN",
  Transunion: "TRANSUNION",
} as const;
export type CraPartnerInsightsBureau =
  | (typeof CraPartnerInsightsBureau)[keyof typeof CraPartnerInsightsBureau]
  | (string & {});

export const craPartnerInsightsBureauSchema: EnumSchema<CraPartnerInsightsBureau> =
  s.enumOf<CraPartnerInsightsBureau>(CraPartnerInsightsBureau);
