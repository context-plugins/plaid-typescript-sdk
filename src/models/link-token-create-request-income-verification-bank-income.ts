import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenCreateRequestIncomeVerificationBankIncome = {
  daysRequested: number;
  enableMultipleItems?: boolean | null;
};

export const linkTokenCreateRequestIncomeVerificationBankIncomeSchema: Schema<LinkTokenCreateRequestIncomeVerificationBankIncome> =
  s.object<LinkTokenCreateRequestIncomeVerificationBankIncome>({
    daysRequested: s.number(),
    enableMultipleItems: s.optionalNullable(s.boolean()),
    _keysMap: {
      daysRequested: "days_requested",
      enableMultipleItems: "enable_multiple_items",
    },
  });
