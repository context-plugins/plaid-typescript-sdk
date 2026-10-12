import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craReportGetReportSchema, type CraReportGetReport } from "./cra-report-get-report.js";
import { craReportWarningSchema, type CraReportWarning } from "./cra-report-warning.js";

/** CraReportGetResponse defines the response schema for `/cra/report/get`. */
export type CraReportGetResponse = {
  /** The CRA report returned by `/cra/report/get`. */
  report: CraReportGetReport;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * A unique user identifier, created by `/user/create`. Integrations that began using
   * `/user/create` after December 10, 2025 use this field to identify a user instead of the
   * `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userId: string;
  /**
   * User or report-level errors that affected the overall report but do not map to a specific
   * product failure.
   */
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
