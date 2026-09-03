import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prismCashScoreVersionSchema, type PrismCashScoreVersion } from "./prism-cash-score-version.js";
import { prismDetectVersionSchema, type PrismDetectVersion } from "./prism-detect-version.js";
import { prismExtendVersionSchema, type PrismExtendVersion } from "./prism-extend-version.js";
import { prismFirstDetectVersionSchema, type PrismFirstDetectVersion } from "./prism-first-detect-version.js";
import { prismInsightsVersionSchema, type PrismInsightsVersion } from "./prism-insights-version.js";

export type PrismVersionsDeprecated = {
  firstdetect?: PrismFirstDetectVersion | null;
  detect?: PrismDetectVersion | null;
  cashscore?: PrismCashScoreVersion | null;
  extend?: PrismExtendVersion | null;
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
