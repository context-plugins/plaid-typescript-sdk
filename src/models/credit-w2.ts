import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditDocumentMetadataSchema, type CreditDocumentMetadata } from "./credit-document-metadata.js";
import { creditPayStubEmployeeSchema, type CreditPayStubEmployee } from "./credit-pay-stub-employee.js";
import { creditPayStubEmployerSchema, type CreditPayStubEmployer } from "./credit-pay-stub-employer.js";
import { w2Box12Schema, type W2Box12 } from "./w2-box12.js";
import { w2StateAndLocalWagesSchema, type W2StateAndLocalWages } from "./w2-state-and-local-wages.js";

/** W2 is an object that represents income data taken from a W2 tax document. */
export type CreditW2 = {
  /** Object representing metadata pertaining to the document. */
  documentMetadata: CreditDocumentMetadata;
  /** An identifier of the document referenced by the document metadata. */
  documentId: string;
  /** Information about the employer on the pay stub. */
  employer: CreditPayStubEmployer;
  /** Data about the employee. */
  employee: CreditPayStubEmployee;
  /** The tax year of the W2 document. */
  taxYear: string | null;
  /** An employer identification number or EIN. */
  employerIdNumber: string | null;
  /** Wages from tips and other compensation. */
  wagesTipsOtherComp: string | null;
  /** Federal income tax withheld for the tax year. */
  federalIncomeTaxWithheld: string | null;
  /** Wages from Social Security. */
  socialSecurityWages: string | null;
  /** Social Security tax withheld for the tax year. */
  socialSecurityTaxWithheld: string | null;
  /** Wages and tips from medicare. */
  medicareWagesAndTips: string | null;
  /** Medicare tax withheld for the tax year. */
  medicareTaxWithheld: string | null;
  /** Tips from Social Security. */
  socialSecurityTips: string | null;
  /** Allocated tips. */
  allocatedTips: string | null;
  /** Contents from box 9 on the W2. */
  box9: string | null;
  /** Dependent care benefits. */
  dependentCareBenefits: string | null;
  /** Nonqualified plans. */
  nonqualifiedPlans: string | null;
  box12: W2Box12[];
  /** Statutory employee. */
  statutoryEmployee: string | null;
  /** Retirement plan. */
  retirementPlan: string | null;
  /** Third party sick pay. */
  thirdPartySickPay: string | null;
  /** Other. */
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
