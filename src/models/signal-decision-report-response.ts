import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SignalDecisionReportResponse = {
  requestId: string;
};

export const signalDecisionReportResponseSchema: Schema<SignalDecisionReportResponse> =
  s.object<SignalDecisionReportResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
