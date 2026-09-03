import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incomeVerificationSourceTypeSchema,
  type IncomeVerificationSourceType,
} from "./income-verification-source-type.js";
import {
  sandboxPublicTokenCreateRequestIncomeVerificationBankIncomeSchema,
  type SandboxPublicTokenCreateRequestIncomeVerificationBankIncome,
} from "./sandbox-public-token-create-request-income-verification-bank-income.js";

export type SandboxPublicTokenCreateRequestOptionsIncomeVerification = {
  incomeSourceTypes?: IncomeVerificationSourceType[];
  bankIncome?: SandboxPublicTokenCreateRequestIncomeVerificationBankIncome;
};

export const sandboxPublicTokenCreateRequestOptionsIncomeVerificationSchema: Schema<SandboxPublicTokenCreateRequestOptionsIncomeVerification> =
  s.object<SandboxPublicTokenCreateRequestOptionsIncomeVerification>({
    incomeSourceTypes: s.optional(s.array(s.lazy(() => incomeVerificationSourceTypeSchema))),
    bankIncome: s.optional(s.lazy(() => sandboxPublicTokenCreateRequestIncomeVerificationBankIncomeSchema)),
    _keysMap: {
      incomeSourceTypes: "income_source_types",
      bankIncome: "bank_income",
    },
  });
