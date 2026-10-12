import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  monitoringConsumerReportPermissiblePurposeSchema,
  type MonitoringConsumerReportPermissiblePurpose,
} from "./monitoring-consumer-report-permissible-purpose.js";

/** CraMonitoringInsightsGetRequest defines the request schema for `/cra/monitoring_insights/get` */
export type CraMonitoringInsightsGetRequest = {
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
  /**
   * Describes the reason you are generating a Consumer Report for this user.
   *
   * `ACCOUNT_REVIEW_CREDIT`: In connection with a consumer credit transaction for the review or
   * collection of an account pursuant to FCRA Section 604(a)(3)(A).
   *
   * `WRITTEN_INSTRUCTION_OTHER`: In accordance with the written instructions of the consumer
   * pursuant to FCRA Section 604(a)(2), such as when an individual agrees to act as a guarantor or
   * assumes personal liability for a consumer, business, or commercial loan.
   */
  consumerReportPermissiblePurpose: MonitoringConsumerReportPermissiblePurpose;
  /**
   * The user token associated with the user for which data is being requested. This field is used
   * only by customers with pre-existing integrations that already use the `user_token` field. All
   * other customers should use the `user_id` instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userToken?: string;
};

export const craMonitoringInsightsGetRequestSchema: Schema<CraMonitoringInsightsGetRequest> =
  s.object<CraMonitoringInsightsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    consumerReportPermissiblePurpose: monitoringConsumerReportPermissiblePurposeSchema,
    userToken: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      consumerReportPermissiblePurpose: "consumer_report_permissible_purpose",
      userToken: "user_token",
    },
  });
