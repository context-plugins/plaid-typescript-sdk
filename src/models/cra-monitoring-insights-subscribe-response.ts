import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * CraMonitoringInsightsSubscribeResponse defines the response schema for
 * `/cra/monitoring_insights/subscribe`
 */
export type CraMonitoringInsightsSubscribeResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /** A unique identifier for the subscription. */
  subscriptionId: string;
};

export const craMonitoringInsightsSubscribeResponseSchema: Schema<CraMonitoringInsightsSubscribeResponse> =
  s.object<CraMonitoringInsightsSubscribeResponse>({
    requestId: s.string(),
    subscriptionId: s.string(),
    _keysMap: {
      requestId: "request_id",
      subscriptionId: "subscription_id",
    },
  });
