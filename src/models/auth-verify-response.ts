import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { verificationInsightsSchema, type VerificationInsights } from "./verification-insights.js";

/** AuthVerifyResponse defines the response schema for `/auth/verify` */
export type AuthVerifyResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * The `item_id` value of the Item created for verification. If numbers data provided is invalid,
   * an Item may not be created.
   */
  itemId?: string | null;
  /**
   * Indicates the Item's database verification status. Possible values are:
   *
   * `database_insights_fail`: The Item's numbers have been verified using Plaid's data sources and
   * have signal for being invalid and/or have no signal for being valid. Typically this indicates
   * that the routing number is invalid, the account number does not match the account number format
   * associated with the routing number, or the account has been reported as closed or frozen. Only
   * returned for Auth Items created via Database Auth.
   *
   * `database_insights_pass`: The Item's numbers have been verified using Plaid's data sources: the
   * routing and account number match a routing and account number of an account recognized on the
   * Plaid network, and the account is not known by Plaid to be frozen or closed. Only returned for
   * Auth Items created via Database Auth.
   *
   * `database_insights_pass_with_caution`: The Item's numbers have been verified using Plaid's data
   * sources and have some signal for being valid: the routing and account number were not
   * recognized on the Plaid network, but the routing number is valid and the account number is a
   * potential valid account number for that routing number. Only returned for Auth Items created
   * via Database Auth.
   */
  verificationStatus: string;
  /**
   * Insights from performing database verification for the account. Only returned for Auth Items
   * using Database Auth.
   */
  verificationInsights: VerificationInsights;
};

export const authVerifyResponseSchema: Schema<AuthVerifyResponse> = s.object<AuthVerifyResponse>({
  requestId: s.string(),
  itemId: s.optionalNullable(s.string()),
  verificationStatus: s.string(),
  verificationInsights: verificationInsightsSchema,
  _keysMap: {
    requestId: "request_id",
    itemId: "item_id",
    verificationStatus: "verification_status",
    verificationInsights: "verification_insights",
  },
});
