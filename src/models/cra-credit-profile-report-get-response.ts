import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craCreditProfileReportSchema, type CraCreditProfileReport } from "./cra-credit-profile-report.js";
import { craReportWarningSchema, type CraReportWarning } from "./cra-report-warning.js";

/**
 * CraCreditProfileReportGetResponse defines the response schema for
 * `/cra/credit_profile/report/get`.
 */
export type CraCreditProfileReportGetResponse = {
  /** Contains data for the CRA Credit Profile Report. */
  report: CraCreditProfileReport;
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
  userId?: string;
  /**
   * If the report generation was successful but a subset of data could not be retrieved, this array
   * will contain information about the errors causing information to be missing
   */
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
