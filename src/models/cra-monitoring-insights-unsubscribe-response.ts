import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraMonitoringInsightsUnsubscribeResponse = {
  requestId: string;
};

export const craMonitoringInsightsUnsubscribeResponseSchema: Schema<CraMonitoringInsightsUnsubscribeResponse> =
  s.object<CraMonitoringInsightsUnsubscribeResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
