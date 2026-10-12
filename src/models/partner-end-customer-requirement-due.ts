import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A field that may be required to be submitted for enablement. */
export const PartnerEndCustomerRequirementDue = {
  LegalEntityName: "legal_entity_name",
  Website: "website",
  ApplicationName: "application_name",
  IsDiligenceAttested: "is_diligence_attested",
  TechnicalContact: "technical_contact",
  BillingContact: "billing_contact",
  Address: "address",
  BankAddendumAcceptance: "bank_addendum_acceptance",
  QuestionnairesCra: "questionnaires.cra",
} as const;
export type PartnerEndCustomerRequirementDue =
  | (typeof PartnerEndCustomerRequirementDue)[keyof typeof PartnerEndCustomerRequirementDue]
  | (string & {});

export const partnerEndCustomerRequirementDueSchema: EnumSchema<PartnerEndCustomerRequirementDue> =
  s.enumOf<PartnerEndCustomerRequirementDue>(PartnerEndCustomerRequirementDue);
