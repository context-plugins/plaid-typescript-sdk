import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craReportWarningSchema, type CraReportWarning } from "./cra-report-warning.js";
import { craVerificationReportSchema, type CraVerificationReport } from "./cra-verification-report.js";

/**
 * CraCheckReportVerificationGetResponse defines the response schema for
 * `/cra/check_report/verification/get`.
 */
export type CraCheckReportVerificationGetResponse = {
  /** Contains data for the CRA Home Lending Report. */
  report: CraVerificationReport;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * If the home lending report generation was successful but a subset of data could not be
   * retrieved, this array will contain information about the errors causing information to be
   * missing.
   */
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
