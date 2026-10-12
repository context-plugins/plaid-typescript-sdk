import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * CraMonitoringInsightsUnsubscribeResponse defines the response schema for
 * `/cra/monitoring_insights/unsubscribe`
 */
export type CraMonitoringInsightsUnsubscribeResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const craMonitoringInsightsUnsubscribeResponseSchema: Schema<CraMonitoringInsightsUnsubscribeResponse> =
  s.object<CraMonitoringInsightsUnsubscribeResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
