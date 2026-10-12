import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the end user's payroll institution */
export type IncomeVerificationPrecheckPayrollInstitution = {
  /** The name of payroll institution */
  name?: string | null;
};

export const incomeVerificationPrecheckPayrollInstitutionSchema: Schema<IncomeVerificationPrecheckPayrollInstitution> =
  s.object<IncomeVerificationPrecheckPayrollInstitution>({
    name: s.optionalNullable(s.string()),
  });
