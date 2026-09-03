import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craCreditProfileReportSchema, type CraCreditProfileReport } from "./cra-credit-profile-report.js";
import { craReportWarningSchema, type CraReportWarning } from "./cra-report-warning.js";

export type CraCreditProfileReportGetResponse = {
  report: CraCreditProfileReport;
  requestId: string;
  userId?: string;
  warnings: CraReportWarning[];
};

export const craCreditProfileReportGetResponseSchema: Schema<CraCreditProfileReportGetResponse> =
  s.object<CraCreditProfileReportGetResponse>({
    report: craCreditProfileReportSchema,
    requestId: s.string(),
    userId: s.optional(s.string()),
    warnings: s.array(s.lazy(() => craReportWarningSchema)),
    _keysMap: {
      requestId: "request_id",
      userId: "user_id",
    },
  });
