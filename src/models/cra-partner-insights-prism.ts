import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prismCashScoreSchema, type PrismCashScore } from "./prism-cash-score.js";
import { prismDetectSchema, type PrismDetect } from "./prism-detect.js";
import { prismExtendSchema, type PrismExtend } from "./prism-extend.js";
import { prismFirstDetectSchema, type PrismFirstDetect } from "./prism-first-detect.js";
import { prismInsightsSchema, type PrismInsights } from "./prism-insights.js";

export type CraPartnerInsightsPrism = {
  insights?: PrismInsights | null;
  cashScore?: PrismCashScore | null;
  extend?: PrismExtend | null;
  firstDetect?: PrismFirstDetect | null;
  detect?: PrismDetect | null;
  status: string;
};

export const craPartnerInsightsPrismSchema: Schema<CraPartnerInsightsPrism> =
  s.object<CraPartnerInsightsPrism>({
    insights: s.optionalNullable(s.lazy(() => prismInsightsSchema)),
    cashScore: s.optionalNullable(s.lazy(() => prismCashScoreSchema)),
    extend: s.optionalNullable(s.lazy(() => prismExtendSchema)),
    firstDetect: s.optionalNullable(s.lazy(() => prismFirstDetectSchema)),
    detect: s.optionalNullable(s.lazy(() => prismDetectSchema)),
    status: s.string(),
    _keysMap: {
      cashScore: "cash_score",
      firstDetect: "first_detect",
    },
  });
