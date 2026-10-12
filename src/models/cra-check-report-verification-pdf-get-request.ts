import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCheckReportVerificationPdfReportTypeSchema,
  type CraCheckReportVerificationPdfReportType,
} from "./cra-check-report-verification-pdf-report-type.js";

/**
 * CraCheckReportVerificationPdfGetRequest defines the request schema for
 * `/cra/check_report/verification/pdf/get`.
 */
export type CraCheckReportVerificationPdfGetRequest = {
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
  /** The third-party user token associated with the requested User data. */
  thirdPartyUserToken?: string;
  /**
   * @deprecated
   */
  reportRequested?: CraCheckReportVerificationPdfReportType;
  /**
   * Specifies which types of verification reports to include in the returned PDF. Supported
   * combinations are: `[voa]`, `[employment_refresh]`, `[income]`, or `[voa, income]`. Other
   * combinations are not supported.
   */
  reportsRequested?: CraCheckReportVerificationPdfReportType[];
  /**
   * If `true`, the GSE identifiers (the Report ID and `gse_reference_id`) are omitted from the
   * returned Home Lending Report PDF. Defaults to `false`. These identifiers are always present in
   * the `/cra/check_report/verification/get` JSON response regardless of this field.
   */
  hideGseDetails?: boolean;
  /**
   * The user token associated with the user for which data is being requested. This field is used
   * only by customers with pre-existing integrations that already use the `user_token` field. All
   * other customers should use the `user_id` instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userToken?: string;
};

export const craCheckReportVerificationPdfGetRequestSchema: Schema<CraCheckReportVerificationPdfGetRequest> =
  s.object<CraCheckReportVerificationPdfGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    thirdPartyUserToken: s.optional(s.string()),
    reportRequested: s.optional(s.lazy(() => craCheckReportVerificationPdfReportTypeSchema)),
    reportsRequested: s.optional(s.array(s.lazy(() => craCheckReportVerificationPdfReportTypeSchema))),
    hideGseDetails: s.optional(s.boolean()),
    userToken: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      thirdPartyUserToken: "third_party_user_token",
      reportRequested: "report_requested",
      reportsRequested: "reports_requested",
      hideGseDetails: "hide_gse_details",
      userToken: "user_token",
    },
  });
