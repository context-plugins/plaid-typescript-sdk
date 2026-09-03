import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditBankIncomeItemSchema, type CreditBankIncomeItem } from "./credit-bank-income-item.js";
import { creditBankIncomeSummarySchema, type CreditBankIncomeSummary } from "./credit-bank-income-summary.js";
import { creditBankIncomeWarningSchema, type CreditBankIncomeWarning } from "./credit-bank-income-warning.js";

export type CreditBankIncome = {
  bankIncomeId?: string;
  generatedTime?: Date;
  daysRequested?: number;
  items?: CreditBankIncomeItem[];
  bankIncomeSummary?: CreditBankIncomeSummary;
  warnings?: CreditBankIncomeWarning[];
};

export const creditBankIncomeSchema: Schema<CreditBankIncome> = s.object<CreditBankIncome>({
  bankIncomeId: s.optional(s.string()),
  generatedTime: s.optional(s.dateTime()),
  daysRequested: s.optional(s.number()),
  items: s.optional(s.array(s.lazy(() => creditBankIncomeItemSchema))),
  bankIncomeSummary: s.optional(s.lazy(() => creditBankIncomeSummarySchema)),
  warnings: s.optional(s.array(s.lazy(() => creditBankIncomeWarningSchema))),
  _keysMap: {
    bankIncomeId: "bank_income_id",
    generatedTime: "generated_time",
    daysRequested: "days_requested",
    bankIncomeSummary: "bank_income_summary",
  },
});
