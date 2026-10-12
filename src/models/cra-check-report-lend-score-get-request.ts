import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCheckReportLendScoreGetOptionsSchema,
  type CraCheckReportLendScoreGetOptions,
} from "./cra-check-report-lend-score-get-options.js";

/**
 * CraCheckReportLendScoreGetRequest defines the request schema for
 * `/cra/check_report/lend_score/get`.
 */
export type CraCheckReportLendScoreGetRequest = {
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
   * The user token associated with the user for which data is being requested. This field is used
   * only by customers with pre-existing integrations that already use the `user_token` field. All
   * other customers should use the `user_id` instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userToken?: string;
  /**
   * Deprecated. This field is no longer accepted for new clients (created on or after 2026-07-01).
   * New clients should specify required products when creating the Consumer Report. Existing
   * integrations may continue to pass `options`.
   *
   * @deprecated
   */
  options?: CraCheckReportLendScoreGetOptions | null;
};

export const craCheckReportLendScoreGetRequestSchema: Schema<CraCheckReportLendScoreGetRequest> =
  s.object<CraCheckReportLendScoreGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    thirdPartyUserToken: s.optional(s.string()),
    userToken: s.optional(s.string()),
    options: s.optionalNullable(s.lazy(() => craCheckReportLendScoreGetOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      thirdPartyUserToken: "third_party_user_token",
      userToken: "user_token",
    },
  });
