import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProcessorSignalReturnReportResponse = {
  requestId: string;
};

export const processorSignalReturnReportResponseSchema: Schema<ProcessorSignalReturnReportResponse> =
  s.object<ProcessorSignalReturnReportResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
