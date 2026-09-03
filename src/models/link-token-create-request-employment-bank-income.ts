import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenCreateRequestEmploymentBankIncome = {
  daysRequested: number;
};

export const linkTokenCreateRequestEmploymentBankIncomeSchema: Schema<LinkTokenCreateRequestEmploymentBankIncome> =
  s.object<LinkTokenCreateRequestEmploymentBankIncome>({
    daysRequested: s.number(),
    _keysMap: {
      daysRequested: "days_requested",
    },
  });
