import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProtectReportCreateResponse = {
  reportId: string;
  requestId: string;
};

export const protectReportCreateResponseSchema: Schema<ProtectReportCreateResponse> =
  s.object<ProtectReportCreateResponse>({
    reportId: s.string(),
    requestId: s.string(),
    _keysMap: {
      reportId: "report_id",
      requestId: "request_id",
    },
  });
