import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCheckReportVerificationGetEmploymentRefreshOptionsSchema,
  type CraCheckReportVerificationGetEmploymentRefreshOptions,
} from "./cra-check-report-verification-get-employment-refresh-options.js";
import {
  craCheckReportVerificationGetReportTypeSchema,
  type CraCheckReportVerificationGetReportType,
} from "./cra-check-report-verification-get-report-type.js";

/**
 * CraCheckReportVerificationGetRequest defines the request schema for
 * `/cra/check_report/verification/get`.
 */
export type CraCheckReportVerificationGetRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * A unique user identifier, created by `/user/create`. Integrations that began using
   * `/user/create` after December 10, 2025 use this field to identify a user instead of the
   * `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userId?: string;
  /** Specifies which types of home lending reports are expected in the response */
  reportsRequested: CraCheckReportVerificationGetReportType[];
  /**
   * Deprecated. This field is no longer accepted for new clients (created on or after 2026-07-01).
   * New clients should specify required products when creating the Consumer Report. Existing
   * integrations may continue to pass `employment_refresh_options`.
   *
   * @deprecated
   */
  employmentRefreshOptions?: CraCheckReportVerificationGetEmploymentRefreshOptions | null;
  /**
   * The user token associated with the user for which data is being requested. This field is used
   * only by customers with pre-existing integrations that already use the `user_token` field. All
   * other customers should use the `user_id` instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userToken?: string;
};

export const craCheckReportVerificationGetRequestSchema: Schema<CraCheckReportVerificationGetRequest> =
  s.object<CraCheckReportVerificationGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    reportsRequested: s.array(s.lazy(() => craCheckReportVerificationGetReportTypeSchema)),
    employmentRefreshOptions: s.optionalNullable(
      s.lazy(() => craCheckReportVerificationGetEmploymentRefreshOptionsSchema),
    ),
    userToken: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      reportsRequested: "reports_requested",
      employmentRefreshOptions: "employment_refresh_options",
      userToken: "user_token",
    },
  });
