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

/**
 * A set of parameters for income verification options. This field is required if
 * `income_verification` is included in the `initial_products` array.
 */
export type SandboxPublicTokenCreateRequestOptionsIncomeVerification = {
  /**
   * The types of source income data that users will be permitted to share. Options include `bank`
   * and `payroll`. Currently you can only specify one of these options.
   */
  incomeSourceTypes?: IncomeVerificationSourceType[];
  /**
   * Specifies options for Bank Income. This field is required if `income_verification` is included
   * in the `initial_products` array and `bank` is specified in `income_source_types`.
   */
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
