import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The version of the base FICO score model. */
export const CraPartnerInsightsBaseFicoScoreVersion = {
  /** The `8` base FICO score version. */
  _8: "8",
  /** The `9` base FICO score version. */
  _9: "9",
  /** The `10` base FICO score version. */
  _10: "10",
  /** The `10T` base FICO score version. */
  _10T: "10T",
} as const;
export type CraPartnerInsightsBaseFicoScoreVersion =
  | (typeof CraPartnerInsightsBaseFicoScoreVersion)[keyof typeof CraPartnerInsightsBaseFicoScoreVersion]
  | (string & {});

export const craPartnerInsightsBaseFicoScoreVersionSchema: EnumSchema<CraPartnerInsightsBaseFicoScoreVersion> =
  s.enumOf<CraPartnerInsightsBaseFicoScoreVersion>(CraPartnerInsightsBaseFicoScoreVersion);
