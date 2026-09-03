import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craReportGetReportSchema, type CraReportGetReport } from "./cra-report-get-report.js";
import { craReportWarningSchema, type CraReportWarning } from "./cra-report-warning.js";

export type CraReportGetResponse = {
  report: CraReportGetReport;
  requestId: string;
  userId: string;
  warnings: CraReportWarning[];
};

export const craReportGetResponseSchema: Schema<CraReportGetResponse> = s.object<CraReportGetResponse>({
  report: craReportGetReportSchema,
  requestId: s.string(),
  userId: s.string(),
  warnings: s.array(s.lazy(() => craReportWarningSchema)),
  _keysMap: {
    requestId: "request_id",
    userId: "user_id",
  },
});
