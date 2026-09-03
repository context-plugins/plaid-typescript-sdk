import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { baseReportWarningSchema, type BaseReportWarning } from "./base-report-warning.js";
import { baseReportSchema, type BaseReport } from "./base-report.js";

export type CraCheckReportBaseReportGetResponse = {
  report: BaseReport;
  warnings: BaseReportWarning[];
  requestId: string;
};

export const craCheckReportBaseReportGetResponseSchema: Schema<CraCheckReportBaseReportGetResponse> =
  s.object<CraCheckReportBaseReportGetResponse>({
    report: baseReportSchema,
    warnings: s.array(s.lazy(() => baseReportWarningSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
