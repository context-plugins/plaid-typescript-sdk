import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLendScoreReportSchema, type CraLendScoreReport } from "./cra-lend-score-report.js";
import { craReportWarningSchema, type CraReportWarning } from "./cra-report-warning.js";

/**
 * CraCheckReportLendScoreGetResponse defines the response schema for
 * `/cra/check_report/lend_score/get`.
 */
export type CraCheckReportLendScoreGetResponse = {
  /** Contains data for the CRA LendScore Report. */
  report: CraLendScoreReport;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * If the LendScore generation was successful but a subset of data could not be retrieved, this
   * array will contain information about the errors causing information to be missing
   */
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
