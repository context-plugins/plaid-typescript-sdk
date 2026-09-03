import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditDocumentMetadataSchema, type CreditDocumentMetadata } from "./credit-document-metadata.js";
import { creditPayStubEmployeeSchema, type CreditPayStubEmployee } from "./credit-pay-stub-employee.js";
import { creditPayStubEmployerSchema, type CreditPayStubEmployer } from "./credit-pay-stub-employer.js";
import { w2Box12Schema, type W2Box12 } from "./w2-box12.js";
import { w2StateAndLocalWagesSchema, type W2StateAndLocalWages } from "./w2-state-and-local-wages.js";

export type CreditW2 = {
  documentMetadata: CreditDocumentMetadata;
  documentId: string;
  employer: CreditPayStubEmployer;
  employee: CreditPayStubEmployee;
  taxYear: string | null;
  employerIdNumber: string | null;
  wagesTipsOtherComp: string | null;
  federalIncomeTaxWithheld: string | null;
  socialSecurityWages: string | null;
  socialSecurityTaxWithheld: string | null;
  medicareWagesAndTips: string | null;
  medicareTaxWithheld: string | null;
  socialSecurityTips: string | null;
  allocatedTips: string | null;
  box9: string | null;
  dependentCareBenefits: string | null;
  nonqualifiedPlans: string | null;
  box12: W2Box12[];
  statutoryEmployee: string | null;
  retirementPlan: string | null;
  thirdPartySickPay: string | null;
  other: string | null;
  stateAndLocalWages: W2StateAndLocalWages[];
};

export const creditW2Schema: Schema<CreditW2> = s.object<CreditW2>({
  documentMetadata: creditDocumentMetadataSchema,
  documentId: s.string(),
  employer: creditPayStubEmployerSchema,
  employee: creditPayStubEmployeeSchema,
  taxYear: s.nullable(s.string()),
  employerIdNumber: s.nullable(s.string()),
  wagesTipsOtherComp: s.nullable(s.string()),
  federalIncomeTaxWithheld: s.nullable(s.string()),
  socialSecurityWages: s.nullable(s.string()),
  socialSecurityTaxWithheld: s.nullable(s.string()),
  medicareWagesAndTips: s.nullable(s.string()),
  medicareTaxWithheld: s.nullable(s.string()),
  socialSecurityTips: s.nullable(s.string()),
  allocatedTips: s.nullable(s.string()),
  box9: s.nullable(s.string()),
  dependentCareBenefits: s.nullable(s.string()),
  nonqualifiedPlans: s.nullable(s.string()),
  box12: s.array(s.lazy(() => w2Box12Schema)),
  statutoryEmployee: s.nullable(s.string()),
  retirementPlan: s.nullable(s.string()),
  thirdPartySickPay: s.nullable(s.string()),
  other: s.nullable(s.string()),
  stateAndLocalWages: s.array(s.lazy(() => w2StateAndLocalWagesSchema)),
  _keysMap: {
    documentMetadata: "document_metadata",
    documentId: "document_id",
    taxYear: "tax_year",
    employerIdNumber: "employer_id_number",
    wagesTipsOtherComp: "wages_tips_other_comp",
    federalIncomeTaxWithheld: "federal_income_tax_withheld",
    socialSecurityWages: "social_security_wages",
    socialSecurityTaxWithheld: "social_security_tax_withheld",
    medicareWagesAndTips: "medicare_wages_and_tips",
    medicareTaxWithheld: "medicare_tax_withheld",
    socialSecurityTips: "social_security_tips",
    allocatedTips: "allocated_tips",
    box9: "box_9",
    dependentCareBenefits: "dependent_care_benefits",
    nonqualifiedPlans: "nonqualified_plans",
    box12: "box_12",
    statutoryEmployee: "statutory_employee",
    retirementPlan: "retirement_plan",
    thirdPartySickPay: "third_party_sick_pay",
    stateAndLocalWages: "state_and_local_wages",
  },
});
