import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProcessorSignalDecisionReportResponse = {
  requestId: string;
};

export const processorSignalDecisionReportResponseSchema: Schema<ProcessorSignalDecisionReportResponse> =
  s.object<ProcessorSignalDecisionReportResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
