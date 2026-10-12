import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankIncomeCategorySchema,
  type CreditBankIncomeCategory,
} from "./credit-bank-income-category.js";
import {
  creditBankIncomeHistoricalSummarySchema,
  type CreditBankIncomeHistoricalSummary,
} from "./credit-bank-income-historical-summary.js";
import {
  creditBankIncomePayFrequencySchema,
  type CreditBankIncomePayFrequency,
} from "./credit-bank-income-pay-frequency.js";

/** Detailed information for the income source. */
export type CreditBankIncomeSource = {
  /** A unique identifier for an income source. */
  incomeSourceId?: string;
  /** The most common name or original description for the underlying income transactions. */
  incomeDescription?: string;
  /**
   * The income category. `BANK_INTEREST`: Interest earned from a bank account. `BENEFIT_OTHER`:
   * Government benefits other than retirement, unemployment, child support, or disability.
   * Currently used only in the UK, to represent benefits such as Cost of Living Payments. `CASH`:
   * Deprecated and used only for existing legacy implementations. Has been replaced by
   * `CASH_DEPOSIT` and `TRANSFER_FROM_APPLICATION`. `CASH_DEPOSIT`: A cash or check deposit.
   * `CHILD_SUPPORT`: Child support payments received. `GIG_ECONOMY`: Income earned as a gig economy
   * worker, e.g. driving for Uber, Lyft, Postmates, DoorDash, etc. `LONG_TERM_DISABILITY`:
   * Disability payments, including Social Security disability benefits. `OTHER`: Income that could
   * not be categorized as any other income category. `MILITARY`: Veterans benefits. Income earned
   * as salary for serving in the military (e.g. through DFAS) will be classified as `SALARY` rather
   * than `MILITARY`. `RENTAL`: Income earned from a rental property. Income may be identified as
   * rental when the payment is received through a rental platform, e.g. Airbnb; rent paid directly
   * by the tenant to the property owner (e.g. via cash, check, or ACH) will typically not be
   * classified as rental income. `RETIREMENT`: Payments from private retirement systems, pensions,
   * and government retirement programs, including Social Security retirement benefits. `SALARY`:
   * Payment from an employer to an earner or other form of permanent employment. `TAX_REFUND`: A
   * tax refund. `TRANSFER_FROM_APPLICATION`: Deposits from a money transfer app, such as Venmo,
   * Cash App, or Zelle. `UNEMPLOYMENT`: Unemployment benefits. In the UK, includes certain
   * low-income benefits such as the Universal Credit.
   */
  incomeCategory?: CreditBankIncomeCategory;
  /** Plaid's unique identifier for the account. */
  accountId?: string;
  /**
   * Minimum of all dates within the specific income sources in the user's bank account for days
   * requested by the client. The date will be returned in an ISO 8601 format (YYYY-MM-DD).
   */
  startDate?: string;
  /**
   * Maximum of all dates within the specific income sources in the user's bank account for days
   * requested by the client. The date will be returned in an ISO 8601 format (YYYY-MM-DD).
   */
  endDate?: string;
  /** The income pay frequency. */
  payFrequency?: CreditBankIncomePayFrequency;
  /**
   * Total amount of earnings in the user's bank account for the specific income source for days
   * requested by the client.
   */
  totalAmount?: number;
  /** Number of transactions for the income source within the start and end date. */
  transactionCount?: number;
  historicalSummary?: CreditBankIncomeHistoricalSummary[];
};

export const creditBankIncomeSourceSchema: Schema<CreditBankIncomeSource> = s.object<CreditBankIncomeSource>({
  incomeSourceId: s.optional(s.string()),
  incomeDescription: s.optional(s.string()),
  incomeCategory: s.optional(s.lazy(() => creditBankIncomeCategorySchema)),
  accountId: s.optional(s.string()),
  startDate: s.optional(s.dateOnly()),
  endDate: s.optional(s.dateOnly()),
  payFrequency: s.optional(s.lazy(() => creditBankIncomePayFrequencySchema)),
  totalAmount: s.optional(s.float64()),
  transactionCount: s.optional(s.int()),
  historicalSummary: s.optional(s.array(s.lazy(() => creditBankIncomeHistoricalSummarySchema))),
  _keysMap: {
    incomeSourceId: "income_source_id",
    incomeDescription: "income_description",
    incomeCategory: "income_category",
    accountId: "account_id",
    startDate: "start_date",
    endDate: "end_date",
    payFrequency: "pay_frequency",
    totalAmount: "total_amount",
    transactionCount: "transaction_count",
    historicalSummary: "historical_summary",
  },
});
