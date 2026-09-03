import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CraPartnerInsightsBaseFicoScoreVersion = {
  _8: "8",
  _9: "9",
  _10: "10",
  _10T: "10T",
} as const;
export type CraPartnerInsightsBaseFicoScoreVersion =
  | (typeof CraPartnerInsightsBaseFicoScoreVersion)[keyof typeof CraPartnerInsightsBaseFicoScoreVersion]
  | (string & {});

export const craPartnerInsightsBaseFicoScoreVersionSchema: EnumSchema<CraPartnerInsightsBaseFicoScoreVersion> =
  s.enumOf<CraPartnerInsightsBaseFicoScoreVersion>(CraPartnerInsightsBaseFicoScoreVersion);
