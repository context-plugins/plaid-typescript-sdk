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

export type CreditPayrollIncomePrecheckRequest = {
  clientId?: string;
  secret?: string;
  userToken?: string;
  userId?: string;
  accessTokens?: string[];
  employer?: IncomeVerificationPrecheckEmployer | null;
  usMilitaryInfo?: IncomeVerificationPrecheckMilitaryInfo | null;
  payrollInstitution?: IncomeVerificationPrecheckPayrollInstitution | null;
};

export const creditPayrollIncomePrecheckRequestSchema: Schema<CreditPayrollIncomePrecheckRequest> =
  s.object<CreditPayrollIncomePrecheckRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.optional(s.string()),
    userId: s.optional(s.string()),
    accessTokens: s.optional(s.array(s.string())),
    employer: s.optionalNullable(s.lazy(() => incomeVerificationPrecheckEmployerSchema)),
    usMilitaryInfo: s.optionalNullable(s.lazy(() => incomeVerificationPrecheckMilitaryInfoSchema)),
    payrollInstitution: s.optionalNullable(s.lazy(() => incomeVerificationPrecheckPayrollInstitutionSchema)),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
      userId: "user_id",
      accessTokens: "access_tokens",
      usMilitaryInfo: "us_military_info",
      payrollInstitution: "payroll_institution",
    },
  });
