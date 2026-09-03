import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IncomeVerificationPrecheckPayrollInstitution = {
  name?: string | null;
};

export const incomeVerificationPrecheckPayrollInstitutionSchema: Schema<IncomeVerificationPrecheckPayrollInstitution> =
  s.object<IncomeVerificationPrecheckPayrollInstitution>({
    name: s.optionalNullable(s.string()),
  });
