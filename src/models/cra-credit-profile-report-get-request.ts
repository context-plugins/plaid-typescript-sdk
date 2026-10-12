import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  consumerReportPermissiblePurposeSchema,
  type ConsumerReportPermissiblePurpose,
} from "./consumer-report-permissible-purpose.js";
import {
  craCreditProfileInquiryTypeSchema,
  type CraCreditProfileInquiryType,
} from "./cra-credit-profile-inquiry-type.js";
import {
  craCreditProfileReportTypeSchema,
  type CraCreditProfileReportType,
} from "./cra-credit-profile-report-type.js";
import {
  craCreditProfileReportVersionSchema,
  type CraCreditProfileReportVersion,
} from "./cra-credit-profile-report-version.js";

/**
 * CraCreditProfileReportGetRequest defines the request schema for `/cra/credit_profile/report/get`.
 */
export type CraCreditProfileReportGetRequest = {
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
  /** Client-generated identifier, which can be used by lenders to track loan applications. */
  clientReportId: string;
  /** The product type for the credit profile report request. */
  reportType: CraCreditProfileReportType;
  /** The inquiry type of credit profile report. */
  inquiryType: CraCreditProfileInquiryType;
  /** The version of the credit profile report to retrieve. */
  version: CraCreditProfileReportVersion;
};

export const craCreditProfileReportGetRequestSchema: Schema<CraCreditProfileReportGetRequest> =
  s.object<CraCreditProfileReportGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.string(),
    consumerReportPermissiblePurpose: consumerReportPermissiblePurposeSchema,
    clientReportId: s.string(),
    reportType: craCreditProfileReportTypeSchema,
    inquiryType: craCreditProfileInquiryTypeSchema,
    version: craCreditProfileReportVersionSchema,
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      consumerReportPermissiblePurpose: "consumer_report_permissible_purpose",
      clientReportId: "client_report_id",
      reportType: "report_type",
      inquiryType: "inquiry_type",
    },
  });
