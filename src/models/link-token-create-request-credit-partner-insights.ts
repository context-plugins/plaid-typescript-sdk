import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenCreateRequestCreditPartnerInsights = {
  daysRequested?: number;
};

export const linkTokenCreateRequestCreditPartnerInsightsSchema: Schema<LinkTokenCreateRequestCreditPartnerInsights> =
  s.object<LinkTokenCreateRequestCreditPartnerInsights>({
    daysRequested: s.optional(s.number()),
    _keysMap: {
      daysRequested: "days_requested",
    },
  });
