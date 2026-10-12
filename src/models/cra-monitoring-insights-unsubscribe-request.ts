import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * CraMonitoringInsightsUnsubscribeRequest defines the request schema for
 * `/cra/monitoring_insights/unsubscribe`
 */
export type CraMonitoringInsightsUnsubscribeRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** A unique identifier for the subscription. */
  subscriptionId: string;
};

export const craMonitoringInsightsUnsubscribeRequestSchema: Schema<CraMonitoringInsightsUnsubscribeRequest> =
  s.object<CraMonitoringInsightsUnsubscribeRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    subscriptionId: s.string(),
    _keysMap: {
      clientId: "client_id",
      subscriptionId: "subscription_id",
    },
  });
