import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employeeSchema, type Employee } from "./employee.js";
import { paystubEmployerSchema, type PaystubEmployer } from "./paystub-employer.js";
import { w2Box12Schema, type W2Box12 } from "./w2-box12.js";
import { w2StateAndLocalWagesSchema, type W2StateAndLocalWages } from "./w2-state-and-local-wages.js";

/** W2 is an object that represents income data taken from a W2 tax document. */
export type W2 = {
  /** Information about the employer on the paystub */
  employer?: PaystubEmployer;
  /** Data about the employee. */
  employee?: Employee;
  /** The tax year of the W2 document. */
  taxYear?: string | null;
  /** An employer identification number or EIN. */
  employerIdNumber?: string | null;
  /** Wages from tips and other compensation. */
  wagesTipsOtherComp?: string | null;
  /** Federal income tax withheld for the tax year. */
  federalIncomeTaxWithheld?: string | null;
  /** Wages from Social Security. */
  socialSecurityWages?: string | null;
  /** Social Security tax withheld for the tax year. */
  socialSecurityTaxWithheld?: string | null;
  /** Wages and tips from medicare. */
  medicareWagesAndTips?: string | null;
  /** Medicare tax withheld for the tax year. */
  medicareTaxWithheld?: string | null;
  /** Tips from Social Security. */
  socialSecurityTips?: string | null;
  /** Allocated tips. */
  allocatedTips?: string | null;
  /** Contents from box 9 on the W2. */
  box9?: string | null;
  /** Dependent care benefits. */
  dependentCareBenefits?: string | null;
  /** Nonqualified plans. */
  nonqualifiedPlans?: string | null;
  box12?: W2Box12[];
  /** Statutory employee. */
  statutoryEmployee?: string | null;
  /** Retirement plan. */
  retirementPlan?: string | null;
  /** Third party sick pay. */
  thirdPartySickPay?: string | null;
  /** Other. */
  other?: string | null;
  stateAndLocalWages?: W2StateAndLocalWages[];
};

export const w2Schema: Schema<W2> = s.object<W2>({
  employer: s.optional(s.lazy(() => paystubEmployerSchema)),
  employee: s.optional(s.lazy(() => employeeSchema)),
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
  box12: s.optional(s.array(s.lazy(() => w2Box12Schema))),
  statutoryEmployee: s.optionalNullable(s.string()),
  retirementPlan: s.optionalNullable(s.string()),
  thirdPartySickPay: s.optionalNullable(s.string()),
  other: s.optionalNullable(s.string()),
  stateAndLocalWages: s.optional(s.array(s.lazy(() => w2StateAndLocalWagesSchema))),
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
