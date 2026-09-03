import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLendScoreReportSchema, type CraLendScoreReport } from "./cra-lend-score-report.js";
import { craReportWarningSchema, type CraReportWarning } from "./cra-report-warning.js";

export type CraCheckReportLendScoreGetResponse = {
  report: CraLendScoreReport;
  requestId: string;
  warnings?: CraReportWarning[];
};

export const craCheckReportLendScoreGetResponseSchema: Schema<CraCheckReportLendScoreGetResponse> =
  s.object<CraCheckReportLendScoreGetResponse>({
    report: craLendScoreReportSchema,
    requestId: s.string(),
    warnings: s.optional(s.array(s.lazy(() => craReportWarningSchema))),
    _keysMap: {
      requestId: "request_id",
    },
  });
