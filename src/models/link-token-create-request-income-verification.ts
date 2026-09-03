import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incomeVerificationSourceTypeSchema,
  type IncomeVerificationSourceType,
} from "./income-verification-source-type.js";
import {
  linkTokenCreateRequestIncomeVerificationBankIncomeSchema,
  type LinkTokenCreateRequestIncomeVerificationBankIncome,
} from "./link-token-create-request-income-verification-bank-income.js";
import {
  linkTokenCreateRequestIncomeVerificationPayrollIncomeSchema,
  type LinkTokenCreateRequestIncomeVerificationPayrollIncome,
} from "./link-token-create-request-income-verification-payroll-income.js";
import {
  linkTokenCreateRequestUserStatedIncomeSourceSchema,
  type LinkTokenCreateRequestUserStatedIncomeSource,
} from "./link-token-create-request-user-stated-income-source.js";

export type LinkTokenCreateRequestIncomeVerification = {
  incomeVerificationId?: string;
  assetReportId?: string;
  accessTokens?: string[] | null;
  incomeSourceTypes?: IncomeVerificationSourceType[];
  bankIncome?: LinkTokenCreateRequestIncomeVerificationBankIncome;
  payrollIncome?: LinkTokenCreateRequestIncomeVerificationPayrollIncome;
  statedIncomeSources?: LinkTokenCreateRequestUserStatedIncomeSource[];
};

export const linkTokenCreateRequestIncomeVerificationSchema: Schema<LinkTokenCreateRequestIncomeVerification> =
  s.object<LinkTokenCreateRequestIncomeVerification>({
    incomeVerificationId: s.optional(s.string()),
    assetReportId: s.optional(s.string()),
    accessTokens: s.optionalNullable(s.array(s.string())),
    incomeSourceTypes: s.optional(s.array(s.lazy(() => incomeVerificationSourceTypeSchema))),
    bankIncome: s.optional(s.lazy(() => linkTokenCreateRequestIncomeVerificationBankIncomeSchema)),
    payrollIncome: s.optional(s.lazy(() => linkTokenCreateRequestIncomeVerificationPayrollIncomeSchema)),
    statedIncomeSources: s.optional(
      s.array(s.lazy(() => linkTokenCreateRequestUserStatedIncomeSourceSchema)),
    ),
    _keysMap: {
      incomeVerificationId: "income_verification_id",
      assetReportId: "asset_report_id",
      accessTokens: "access_tokens",
      incomeSourceTypes: "income_source_types",
      bankIncome: "bank_income",
      payrollIncome: "payroll_income",
      statedIncomeSources: "stated_income_sources",
    },
  });
