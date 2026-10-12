import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craMonitoringInsightsItemSchema,
  type CraMonitoringInsightsItem,
} from "./cra-monitoring-insights-item.js";

/**
 * CraMonitoringInsightsGetResponse defines the response schema for `/cra/monitoring_insights/get`
 */
export type CraMonitoringInsightsGetResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * A unique ID identifying a User Monitoring Insights Report. Like all Plaid identifiers, this ID
   * is case sensitive.
   */
  userInsightsId: string;
  /** An array of Monitoring Insights Items associated with the user. */
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
