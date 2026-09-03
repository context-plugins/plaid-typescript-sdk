import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craPartnerInsightsSchema, type CraPartnerInsights } from "./cra-partner-insights.js";

export type CraPartnerInsightsGetResponse = {
  report?: CraPartnerInsights[];
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
