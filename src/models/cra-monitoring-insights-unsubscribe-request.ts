import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraMonitoringInsightsUnsubscribeRequest = {
  clientId?: string;
  secret?: string;
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
