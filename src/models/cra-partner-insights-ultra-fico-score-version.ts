import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CraPartnerInsightsUltraFicoScoreVersion = {
  _10: "1.0",
} as const;
export type CraPartnerInsightsUltraFicoScoreVersion =
  | (typeof CraPartnerInsightsUltraFicoScoreVersion)[keyof typeof CraPartnerInsightsUltraFicoScoreVersion]
  | (string & {});

export const craPartnerInsightsUltraFicoScoreVersionSchema: EnumSchema<CraPartnerInsightsUltraFicoScoreVersion> =
  s.enumOf<CraPartnerInsightsUltraFicoScoreVersion>(CraPartnerInsightsUltraFicoScoreVersion);
