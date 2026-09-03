import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CraCheckReportPermissiblePurpose = {
  AccountReviewCredit: "ACCOUNT_REVIEW_CREDIT",
  WrittenInstructionOther: "WRITTEN_INSTRUCTION_OTHER",
} as const;
export type CraCheckReportPermissiblePurpose =
  | (typeof CraCheckReportPermissiblePurpose)[keyof typeof CraCheckReportPermissiblePurpose]
  | (string & {});

export const craCheckReportPermissiblePurposeSchema: EnumSchema<CraCheckReportPermissiblePurpose> =
  s.enumOf<CraCheckReportPermissiblePurpose>(CraCheckReportPermissiblePurpose);
