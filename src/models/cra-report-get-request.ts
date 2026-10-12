import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  consumerReportPermissiblePurposeSchema,
  type ConsumerReportPermissiblePurpose,
} from "./consumer-report-permissible-purpose.js";
import { craReportDecisionStageSchema, type CraReportDecisionStage } from "./cra-report-decision-stage.js";
import {
  craReportGetRequestProductSchema,
  type CraReportGetRequestProduct,
} from "./cra-report-get-request-product.js";
import { craReportScopeSchema, type CraReportScope } from "./cra-report-scope.js";

/** CraReportGetRequest defines the request schema for `/cra/report/get`. */
export type CraReportGetRequest = {
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
  userId: string;
  /**
   * The requested products and their versions, e.g. `[{"product":"cra_qualify","version":"V1"}]`.
   */
  products: CraReportGetRequestProduct[];
  /**
   * Determines whose items are used. `PLAID_NETWORK` (default) uses the Plaid Network view of the
   * user's profile. `CLIENT_USER` uses only the items linked by this client.
   */
  scope?: CraReportScope;
  /** The stage in the lending lifecycle for which the report is being retrieved. */
  decisionStage: CraReportDecisionStage;
  /**
   * Describes the reason you are generating a Consumer Report for this user. When calling
   * `/link/token/create`, this field is required when using Plaid Check (CRA) products; invalid if
   * not using Plaid Check (CRA) products.
   *
   * `ACCOUNT_REVIEW_CREDIT`: In connection with a consumer credit transaction for the review or
   * collection of an account pursuant to FCRA Section 604(a)(3)(A).
   *
   * `ACCOUNT_REVIEW_NON_CREDIT`: For a legitimate business need of the information to review a
   * non-credit account provided primarily for personal, family, or household purposes to determine
   * whether the consumer continues to meet the terms of the account pursuant to FCRA Section
   * 604(a)(3)(F)(2).
   *
   * `EXTENSION_OF_CREDIT`: In connection with a credit transaction initiated by and involving the
   * consumer pursuant to FCRA Section 604(a)(3)(A).
   *
   * `LEGITIMATE_BUSINESS_NEED_TENANT_SCREENING`: For a legitimate business need in connection with
   * a business transaction initiated by the consumer primarily for personal, family, or household
   * purposes in connection with a property rental assessment pursuant to FCRA Section
   * 604(a)(3)(F)(i).
   *
   * `LEGITIMATE_BUSINESS_NEED_OTHER`: For a legitimate business need in connection with a business
   * transaction made primarily for personal, family, or household initiated by the consumer
   * pursuant to FCRA Section 604(a)(3)(F)(i).
   *
   * `WRITTEN_INSTRUCTION_PREQUALIFICATION`: In accordance with the written instructions of the
   * consumer pursuant to FCRA Section 604(a)(2), to evaluate an application's profile to make an
   * offer to the consumer.
   *
   * `WRITTEN_INSTRUCTION_OTHER`: In accordance with the written instructions of the consumer
   * pursuant to FCRA Section 604(a)(2), such as when an individual agrees to act as a guarantor or
   * assumes personal liability for a consumer, business, or commercial loan.
   *
   * `ELIGIBILITY_FOR_GOVT_BENEFITS`: In connection with an eligibility determination for a
   * government benefit where the entity is required to consider an applicant's financial status
   * pursuant to FCRA Section 604(a)(3)(D).
   */
  consumerReportPermissiblePurpose: ConsumerReportPermissiblePurpose;
};

export const craReportGetRequestSchema: Schema<CraReportGetRequest> = s.object<CraReportGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  userId: s.string(),
  products: s.array(s.lazy(() => craReportGetRequestProductSchema)),
  scope: s.optional(s.lazy(() => craReportScopeSchema)),
  decisionStage: craReportDecisionStageSchema,
  consumerReportPermissiblePurpose: consumerReportPermissiblePurposeSchema,
  _keysMap: {
    clientId: "client_id",
    userId: "user_id",
    decisionStage: "decision_stage",
    consumerReportPermissiblePurpose: "consumer_report_permissible_purpose",
  },
});
