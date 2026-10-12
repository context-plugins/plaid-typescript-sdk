import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCheckReportPermissiblePurposeSchema,
  type CraCheckReportPermissiblePurpose,
} from "./cra-check-report-permissible-purpose.js";
import { craUserTierSchema, type CraUserTier } from "./cra-user-tier.js";

/**
 * CraCheckReportBaseReportGetRequest defines the request schema for
 * `/cra/check_report/base_report/get`
 */
export type CraCheckReportBaseReportGetRequest = {
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
   * The Item IDs to include in the Base Report. If not provided, all Items associated with the user
   * will be included.
   */
  itemIds?: string[] | null;
  /**
   * The user token associated with the user for which data is being requested. This field is used
   * only by customers with pre-existing integrations that already use the `user_token` field. All
   * other customers should use the `user_id` instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userToken?: string;
  /** The tier of the user. */
  userTier?: CraUserTier | null;
  /**
   * The CRA report token (formatted `cra-report-<env>-<uuid>`) identifying a specific consumer
   * report. When provided alongside `consumer_report_permissible_purpose`, pins retrieval to that
   * report and stamps its permissible purpose. If omitted, the most recently generated report for
   * the user is returned.
   */
  reportId?: string;
  consumerReportPermissiblePurpose?: CraCheckReportPermissiblePurpose;
};

export const craCheckReportBaseReportGetRequestSchema: Schema<CraCheckReportBaseReportGetRequest> =
  s.object<CraCheckReportBaseReportGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    thirdPartyUserToken: s.optional(s.string()),
    itemIds: s.optionalNullable(s.array(s.string())),
    userToken: s.optional(s.string()),
    userTier: s.optionalNullable(s.lazy(() => craUserTierSchema)),
    reportId: s.optional(s.string()),
    consumerReportPermissiblePurpose: s.optional(s.lazy(() => craCheckReportPermissiblePurposeSchema)),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      thirdPartyUserToken: "third_party_user_token",
      itemIds: "item_ids",
      userToken: "user_token",
      userTier: "user_tier",
      reportId: "report_id",
      consumerReportPermissiblePurpose: "consumer_report_permissible_purpose",
    },
  });
