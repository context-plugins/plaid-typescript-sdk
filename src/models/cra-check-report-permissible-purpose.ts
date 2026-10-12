import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The permissible purpose under the FCRA for retrieving this consumer report. Restricted to
 * permissible purposes related to loan servicing only. Required when `report_id` is provided.
 */
export const CraCheckReportPermissiblePurpose = {
  AccountReviewCredit: "ACCOUNT_REVIEW_CREDIT",
  WrittenInstructionOther: "WRITTEN_INSTRUCTION_OTHER",
} as const;
export type CraCheckReportPermissiblePurpose =
  | (typeof CraCheckReportPermissiblePurpose)[keyof typeof CraCheckReportPermissiblePurpose]
  | (string & {});

export const craCheckReportPermissiblePurposeSchema: EnumSchema<CraCheckReportPermissiblePurpose> =
  s.enumOf<CraCheckReportPermissiblePurpose>(CraCheckReportPermissiblePurpose);
