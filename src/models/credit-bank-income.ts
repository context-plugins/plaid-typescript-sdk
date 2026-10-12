import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditBankIncomeItemSchema, type CreditBankIncomeItem } from "./credit-bank-income-item.js";
import { creditBankIncomeSummarySchema, type CreditBankIncomeSummary } from "./credit-bank-income-summary.js";
import { creditBankIncomeWarningSchema, type CreditBankIncomeWarning } from "./credit-bank-income-warning.js";

/** The report of the Bank Income data for an end user. */
export type CreditBankIncome = {
  /** The unique identifier associated with the Bank Income Report. */
  bankIncomeId?: string;
  /** The time when the report was generated. */
  generatedTime?: Date;
  /** The number of days requested by the customer for the report. */
  daysRequested?: number;
  /** The list of Items in the report along with the associated metadata about the Item. */
  items?: CreditBankIncomeItem[];
  /** Summary for bank income across all income sources and items (max history of 730 days). */
  bankIncomeSummary?: CreditBankIncomeSummary;
  /**
   * If data from the report was unable to be retrieved, the warnings will contain information about
   * the error that caused the data to be incomplete.
   */
  warnings?: CreditBankIncomeWarning[];
};

export const creditBankIncomeSchema: Schema<CreditBankIncome> = s.object<CreditBankIncome>({
  bankIncomeId: s.optional(s.string()),
  generatedTime: s.optional(s.dateTime()),
  daysRequested: s.optional(s.int()),
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
