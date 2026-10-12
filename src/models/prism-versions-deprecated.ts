import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prismCashScoreVersionSchema, type PrismCashScoreVersion } from "./prism-cash-score-version.js";
import { prismDetectVersionSchema, type PrismDetectVersion } from "./prism-detect-version.js";
import { prismExtendVersionSchema, type PrismExtendVersion } from "./prism-extend-version.js";
import { prismFirstDetectVersionSchema, type PrismFirstDetectVersion } from "./prism-first-detect-version.js";
import { prismInsightsVersionSchema, type PrismInsightsVersion } from "./prism-insights-version.js";

/** Deprecated, use `partner_insights.prism_versions` instead. */
export type PrismVersionsDeprecated = {
  /** The version of Prism FirstDetect. If not specified, will default to v3. */
  firstdetect?: PrismFirstDetectVersion | null;
  /** The version of Prism Detect */
  detect?: PrismDetectVersion | null;
  /** The version of Prism CashScore. If not specified, will default to v3. */
  cashscore?: PrismCashScoreVersion | null;
  /** The version of Prism Extend */
  extend?: PrismExtendVersion | null;
  /** The version of Prism Insights. If not specified, will default to v3. */
  insights?: PrismInsightsVersion | null;
};

export const prismVersionsDeprecatedSchema: Schema<PrismVersionsDeprecated> =
  s.object<PrismVersionsDeprecated>({
    firstdetect: s.optionalNullable(s.lazy(() => prismFirstDetectVersionSchema)),
    detect: s.optionalNullable(s.lazy(() => prismDetectVersionSchema)),
    cashscore: s.optionalNullable(s.lazy(() => prismCashScoreVersionSchema)),
    extend: s.optionalNullable(s.lazy(() => prismExtendVersionSchema)),
    insights: s.optionalNullable(s.lazy(() => prismInsightsVersionSchema)),
  });
