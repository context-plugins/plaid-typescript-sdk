import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incomeVerificationPrecheckEmployerSchema,
  type IncomeVerificationPrecheckEmployer,
} from "./income-verification-precheck-employer.js";
import {
  incomeVerificationPrecheckMilitaryInfoSchema,
  type IncomeVerificationPrecheckMilitaryInfo,
} from "./income-verification-precheck-military-info.js";
import {
  incomeVerificationPrecheckPayrollInstitutionSchema,
  type IncomeVerificationPrecheckPayrollInstitution,
} from "./income-verification-precheck-payroll-institution.js";
import {
  incomeVerificationPrecheckUserSchema,
  type IncomeVerificationPrecheckUser,
} from "./income-verification-precheck-user.js";

export type IncomeVerificationPrecheckRequest = {
  clientId?: string;
  secret?: string;
  user?: IncomeVerificationPrecheckUser | null;
  employer?: IncomeVerificationPrecheckEmployer | null;
  payrollInstitution?: IncomeVerificationPrecheckPayrollInstitution | null;
  transactionsAccessToken?: string | null;
  transactionsAccessTokens?: string[];
  usMilitaryInfo?: IncomeVerificationPrecheckMilitaryInfo | null;
};

export const incomeVerificationPrecheckRequestSchema: Schema<IncomeVerificationPrecheckRequest> =
  s.object<IncomeVerificationPrecheckRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    user: s.optionalNullable(s.lazy(() => incomeVerificationPrecheckUserSchema)),
    employer: s.optionalNullable(s.lazy(() => incomeVerificationPrecheckEmployerSchema)),
    payrollInstitution: s.optionalNullable(s.lazy(() => incomeVerificationPrecheckPayrollInstitutionSchema)),
    transactionsAccessToken: s.optionalNullable(s.string()),
    transactionsAccessTokens: s.optional(s.array(s.string())),
    usMilitaryInfo: s.optionalNullable(s.lazy(() => incomeVerificationPrecheckMilitaryInfoSchema)),
    _keysMap: {
      clientId: "client_id",
      payrollInstitution: "payroll_institution",
      transactionsAccessToken: "transactions_access_token",
      transactionsAccessTokens: "transactions_access_tokens",
      usMilitaryInfo: "us_military_info",
    },
  });
