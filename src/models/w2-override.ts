import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paystubOverrideEmployeeSchema, type PaystubOverrideEmployee } from "./paystub-override-employee.js";
import { paystubOverrideEmployerSchema, type PaystubOverrideEmployer } from "./paystub-override-employer.js";
import { w2Box12OverrideSchema, type W2Box12Override } from "./w2-box12-override.js";
import {
  w2StateAndLocalWagesOverrideSchema,
  type W2StateAndLocalWagesOverride,
} from "./w2-state-and-local-wages-override.js";

export type W2Override = {
  employer?: PaystubOverrideEmployer;
  employee?: PaystubOverrideEmployee;
  taxYear?: string | null;
  employerIdNumber?: string | null;
  wagesTipsOtherComp?: string | null;
  federalIncomeTaxWithheld?: string | null;
  socialSecurityWages?: string | null;
  socialSecurityTaxWithheld?: string | null;
  medicareWagesAndTips?: string | null;
  medicareTaxWithheld?: string | null;
  socialSecurityTips?: string | null;
  allocatedTips?: string | null;
  box9?: string | null;
  dependentCareBenefits?: string | null;
  nonqualifiedPlans?: string | null;
  box12?: W2Box12Override[];
  statutoryEmployee?: string | null;
  retirementPlan?: string | null;
  thirdPartySickPay?: string | null;
  other?: string | null;
  stateAndLocalWages?: W2StateAndLocalWagesOverride[];
};

export const w2OverrideSchema: Schema<W2Override> = s.object<W2Override>({
  employer: s.optional(s.lazy(() => paystubOverrideEmployerSchema)),
  employee: s.optional(s.lazy(() => paystubOverrideEmployeeSchema)),
  taxYear: s.optionalNullable(s.string()),
  employerIdNumber: s.optionalNullable(s.string()),
  wagesTipsOtherComp: s.optionalNullable(s.string()),
  federalIncomeTaxWithheld: s.optionalNullable(s.string()),
  socialSecurityWages: s.optionalNullable(s.string()),
  socialSecurityTaxWithheld: s.optionalNullable(s.string()),
  medicareWagesAndTips: s.optionalNullable(s.string()),
  medicareTaxWithheld: s.optionalNullable(s.string()),
  socialSecurityTips: s.optionalNullable(s.string()),
  allocatedTips: s.optionalNullable(s.string()),
  box9: s.optionalNullable(s.string()),
  dependentCareBenefits: s.optionalNullable(s.string()),
  nonqualifiedPlans: s.optionalNullable(s.string()),
  box12: s.optional(s.array(s.lazy(() => w2Box12OverrideSchema))),
  statutoryEmployee: s.optionalNullable(s.string()),
  retirementPlan: s.optionalNullable(s.string()),
  thirdPartySickPay: s.optionalNullable(s.string()),
  other: s.optionalNullable(s.string()),
  stateAndLocalWages: s.optional(s.array(s.lazy(() => w2StateAndLocalWagesOverrideSchema))),
  _keysMap: {
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
