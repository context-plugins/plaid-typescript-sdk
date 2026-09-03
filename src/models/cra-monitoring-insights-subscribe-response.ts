import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraMonitoringInsightsSubscribeResponse = {
  requestId: string;
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
