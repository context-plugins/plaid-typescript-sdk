import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craPartnerInsightsSchema, type CraPartnerInsights } from "./cra-partner-insights.js";

/** CraPartnerInsightsGetResponse defines the response schema for `/cra/partner_insights/get`. */
export type CraPartnerInsightsGetResponse = {
  report?: CraPartnerInsights[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const craPartnerInsightsGetResponseSchema: Schema<CraPartnerInsightsGetResponse> =
  s.object<CraPartnerInsightsGetResponse>({
    report: s.optional(s.array(s.lazy(() => craPartnerInsightsSchema))),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
