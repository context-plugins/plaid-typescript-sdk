import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MonitoringConsumerReportPermissiblePurpose = {
  AccountReviewCredit: "ACCOUNT_REVIEW_CREDIT",
  WrittenInstructionOther: "WRITTEN_INSTRUCTION_OTHER",
} as const;
export type MonitoringConsumerReportPermissiblePurpose =
  | (typeof MonitoringConsumerReportPermissiblePurpose)[keyof typeof MonitoringConsumerReportPermissiblePurpose]
  | (string & {});

export const monitoringConsumerReportPermissiblePurposeSchema: EnumSchema<MonitoringConsumerReportPermissiblePurpose> =
  s.enumOf<MonitoringConsumerReportPermissiblePurpose>(MonitoringConsumerReportPermissiblePurpose);
