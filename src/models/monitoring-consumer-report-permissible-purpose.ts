import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Describes the reason you are generating a Consumer Report for this user.
 *
 * `ACCOUNT_REVIEW_CREDIT`: In connection with a consumer credit transaction for the review or
 * collection of an account pursuant to FCRA Section 604(a)(3)(A).
 *
 * `WRITTEN_INSTRUCTION_OTHER`: In accordance with the written instructions of the consumer pursuant
 * to FCRA Section 604(a)(2), such as when an individual agrees to act as a guarantor or assumes
 * personal liability for a consumer, business, or commercial loan.
 */
export const MonitoringConsumerReportPermissiblePurpose = {
  AccountReviewCredit: "ACCOUNT_REVIEW_CREDIT",
  WrittenInstructionOther: "WRITTEN_INSTRUCTION_OTHER",
} as const;
export type MonitoringConsumerReportPermissiblePurpose =
  | (typeof MonitoringConsumerReportPermissiblePurpose)[keyof typeof MonitoringConsumerReportPermissiblePurpose]
  | (string & {});

export const monitoringConsumerReportPermissiblePurposeSchema: EnumSchema<MonitoringConsumerReportPermissiblePurpose> =
  s.enumOf<MonitoringConsumerReportPermissiblePurpose>(MonitoringConsumerReportPermissiblePurpose);
