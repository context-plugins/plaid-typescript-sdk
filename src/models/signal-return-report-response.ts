import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SignalReturnReportResponse = {
  requestId: string;
};

export const signalReturnReportResponseSchema: Schema<SignalReturnReportResponse> =
  s.object<SignalReturnReportResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
