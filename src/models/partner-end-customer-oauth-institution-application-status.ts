import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The registration status for the end customer's application. */
export const PartnerEndCustomerOAuthInstitutionApplicationStatus = {
  NotStarted: "NOT_STARTED",
  Processing: "PROCESSING",
  Approved: "APPROVED",
  Enabled: "ENABLED",
  AttentionRequired: "ATTENTION_REQUIRED",
} as const;
export type PartnerEndCustomerOAuthInstitutionApplicationStatus =
  | (typeof PartnerEndCustomerOAuthInstitutionApplicationStatus)[keyof typeof PartnerEndCustomerOAuthInstitutionApplicationStatus]
  | (string & {});

export const partnerEndCustomerOAuthInstitutionApplicationStatusSchema: EnumSchema<PartnerEndCustomerOAuthInstitutionApplicationStatus> =
  s.enumOf<PartnerEndCustomerOAuthInstitutionApplicationStatus>(
    PartnerEndCustomerOAuthInstitutionApplicationStatus,
  );
