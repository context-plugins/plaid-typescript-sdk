import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craMonitoringInsightsItemSchema,
  type CraMonitoringInsightsItem,
} from "./cra-monitoring-insights-item.js";

export type CraMonitoringInsightsGetResponse = {
  requestId: string;
  userInsightsId: string;
  items: CraMonitoringInsightsItem[];
};

export const craMonitoringInsightsGetResponseSchema: Schema<CraMonitoringInsightsGetResponse> =
  s.object<CraMonitoringInsightsGetResponse>({
    requestId: s.string(),
    userInsightsId: s.string(),
    items: s.array(s.lazy(() => craMonitoringInsightsItemSchema)),
    _keysMap: {
      requestId: "request_id",
      userInsightsId: "user_insights_id",
    },
  });
