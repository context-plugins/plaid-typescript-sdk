import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The version of the UltraFICO® score. */
export const CraPartnerInsightsUltraFicoScoreVersion = {
  /** The `1.0` UltraFICO score version. */
  _10: "1.0",
} as const;
export type CraPartnerInsightsUltraFicoScoreVersion =
  | (typeof CraPartnerInsightsUltraFicoScoreVersion)[keyof typeof CraPartnerInsightsUltraFicoScoreVersion]
  | (string & {});

export const craPartnerInsightsUltraFicoScoreVersionSchema: EnumSchema<CraPartnerInsightsUltraFicoScoreVersion> =
  s.enumOf<CraPartnerInsightsUltraFicoScoreVersion>(CraPartnerInsightsUltraFicoScoreVersion);
