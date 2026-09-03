import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConsumerReportPermissiblePurpose = {
  AccountReviewCredit: "ACCOUNT_REVIEW_CREDIT",
  AccountReviewNonCredit: "ACCOUNT_REVIEW_NON_CREDIT",
  ExtensionOfCredit: "EXTENSION_OF_CREDIT",
  LegitimateBusinessNeedTenantScreening: "LEGITIMATE_BUSINESS_NEED_TENANT_SCREENING",
  LegitimateBusinessNeedOther: "LEGITIMATE_BUSINESS_NEED_OTHER",
  WrittenInstructionPrequalification: "WRITTEN_INSTRUCTION_PREQUALIFICATION",
  WrittenInstructionOther: "WRITTEN_INSTRUCTION_OTHER",
  EligibilityForGovtBenefits: "ELIGIBILITY_FOR_GOVT_BENEFITS",
} as const;
export type ConsumerReportPermissiblePurpose =
  | (typeof ConsumerReportPermissiblePurpose)[keyof typeof ConsumerReportPermissiblePurpose]
  | (string & {});

export const consumerReportPermissiblePurposeSchema: EnumSchema<ConsumerReportPermissiblePurpose> =
  s.enumOf<ConsumerReportPermissiblePurpose>(ConsumerReportPermissiblePurpose);
