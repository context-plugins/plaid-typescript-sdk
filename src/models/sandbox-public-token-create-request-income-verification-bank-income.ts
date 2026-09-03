import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxPublicTokenCreateRequestIncomeVerificationBankIncome = {
  daysRequested?: number;
};

export const sandboxPublicTokenCreateRequestIncomeVerificationBankIncomeSchema: Schema<SandboxPublicTokenCreateRequestIncomeVerificationBankIncome> =
  s.object<SandboxPublicTokenCreateRequestIncomeVerificationBankIncome>({
    daysRequested: s.optional(s.number()),
    _keysMap: {
      daysRequested: "days_requested",
    },
  });
