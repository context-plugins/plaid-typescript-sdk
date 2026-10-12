import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prismCashScoreSchema, type PrismCashScore } from "./prism-cash-score.js";
import { prismDetectSchema, type PrismDetect } from "./prism-detect.js";
import { prismExtendSchema, type PrismExtend } from "./prism-extend.js";
import { prismFirstDetectSchema, type PrismFirstDetect } from "./prism-first-detect.js";
import { prismInsightsSchema, type PrismInsights } from "./prism-insights.js";

/** The Prism Data insights for the user. */
export type CraPartnerInsightsPrism = {
  /** The data from the Insights product returned by Prism Data. */
  insights?: PrismInsights | null;
  /** The data from the CashScore® product returned by Prism Data. */
  cashScore?: PrismCashScore | null;
  /** The data from the CashScore® Extend product returned by Prism Data. */
  extend?: PrismExtend | null;
  /** The data from the FirstDetect product returned by Prism Data. */
  firstDetect?: PrismFirstDetect | null;
  /** The data from the CashScore® Detect product returned by Prism Data. */
  detect?: PrismDetect | null;
  /** Details on whether the Prism Data attributes succeeded or failed to be generated. */
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
