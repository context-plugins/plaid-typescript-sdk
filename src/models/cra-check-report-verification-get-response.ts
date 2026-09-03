import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craReportWarningSchema, type CraReportWarning } from "./cra-report-warning.js";
import { craVerificationReportSchema, type CraVerificationReport } from "./cra-verification-report.js";

export type CraCheckReportVerificationGetResponse = {
  report: CraVerificationReport;
  requestId: string;
  warnings: CraReportWarning[];
};

export const craCheckReportVerificationGetResponseSchema: Schema<CraCheckReportVerificationGetResponse> =
  s.object<CraCheckReportVerificationGetResponse>({
    report: craVerificationReportSchema,
    requestId: s.string(),
    warnings: s.array(s.lazy(() => craReportWarningSchema)),
    _keysMap: {
      requestId: "request_id",
    },
  });
