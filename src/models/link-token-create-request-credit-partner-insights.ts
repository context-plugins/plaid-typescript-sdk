import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Specifies options for initializing Link for use with the Credit Partner Insights product. */
export type LinkTokenCreateRequestCreditPartnerInsights = {
  /**
   * The maximum integer number of days of history to compute Credit Partner Insights. Defaults to
   * 180 if not specified
   */
  daysRequested?: number;
};

export const linkTokenCreateRequestCreditPartnerInsightsSchema: Schema<LinkTokenCreateRequestCreditPartnerInsights> =
  s.object<LinkTokenCreateRequestCreditPartnerInsights>({
    daysRequested: s.optional(s.int()),
    _keysMap: {
      daysRequested: "days_requested",
    },
  });
