import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Specifies options for Bank Income. This field is required if `income_verification` is included in
 * the `initial_products` array and `bank` is specified in `income_source_types`.
 */
export type SandboxPublicTokenCreateRequestIncomeVerificationBankIncome = {
  /** The number of days of data to request for the Bank Income product */
  daysRequested?: number;
};

export const sandboxPublicTokenCreateRequestIncomeVerificationBankIncomeSchema: Schema<SandboxPublicTokenCreateRequestIncomeVerificationBankIncome> =
  s.object<SandboxPublicTokenCreateRequestIncomeVerificationBankIncome>({
    daysRequested: s.optional(s.int()),
    _keysMap: {
      daysRequested: "days_requested",
    },
  });
