import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Flow types to retrieve payroll income data */
export const IncomeVerificationPayrollFlowType = {
  PayrollDigitalIncome: "payroll_digital_income",
  PayrollDocumentIncome: "payroll_document_income",
} as const;
export type IncomeVerificationPayrollFlowType =
  | (typeof IncomeVerificationPayrollFlowType)[keyof typeof IncomeVerificationPayrollFlowType]
  | (string & {});

export const incomeVerificationPayrollFlowTypeSchema: EnumSchema<IncomeVerificationPayrollFlowType> =
  s.enumOf<IncomeVerificationPayrollFlowType>(IncomeVerificationPayrollFlowType);
