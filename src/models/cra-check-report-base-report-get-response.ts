import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { baseReportWarningSchema, type BaseReportWarning } from "./base-report-warning.js";
import { baseReportSchema, type BaseReport } from "./base-report.js";

/**
 * CraCheckReportBaseReportGetResponse defines the response schema for
 * `/cra/check_report/base_report/get`
 */
export type CraCheckReportBaseReportGetResponse = {
  /** An object representing a Base Report */
  report: BaseReport;
  /**
   * This array contains any information about errors or alerts related to the Base Report that did
   * not block generation of the report.
   */
  warnings: BaseReportWarning[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
