import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craBankIncomeEmployerSchema, type CraBankIncomeEmployer } from "./cra-bank-income-employer.js";
import {
  craBankIncomeHistoricalSummarySchema,
  type CraBankIncomeHistoricalSummary,
} from "./cra-bank-income-historical-summary.js";
import {
  craBankIncomeIncomeProviderSchema,
  type CraBankIncomeIncomeProvider,
} from "./cra-bank-income-income-provider.js";
import { craBankIncomeStatusSchema, type CraBankIncomeStatus } from "./cra-bank-income-status.js";
import { craPredictionIntervalSchema, type CraPredictionInterval } from "./cra-prediction-interval.js";
import {
  creditBankIncomeCategorySchema,
  type CreditBankIncomeCategory,
} from "./credit-bank-income-category.js";
import {
  creditBankIncomePayFrequencySchema,
  type CreditBankIncomePayFrequency,
} from "./credit-bank-income-pay-frequency.js";

/** Detailed information for the income source. */
export type CraBankIncomeSource = {
  /** The account ID with which this income source is associated. */
  accountId?: string;
  /**
   * A unique identifier for an income source. If the report is regenerated and a new `report_id` is
   * created, the new report will have a new set of `income_source_id`s.
   */
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
  /** The ISO 4217 currency code of the amount or balance. */
  isoCurrencyCode?: string | null;
  /**
   * The unofficial currency code associated with the amount or balance. Always `null` if
   * `iso_currency_code` is non-null. Unofficial currency codes are used for currencies that do not
   * have official ISO currency codes, such as cryptocurrencies and the currencies of certain
   * countries.
   */
  unofficialCurrencyCode?: string | null;
  /** Number of transactions for the income source within the start and end date. */
  transactionCount?: number;
  /**
   * The expected date of the end user's next paycheck for the income source. The date will be
   * returned in an ISO 8601 format (YYYY-MM-DD).
   */
  nextPaymentDate?: string | null;
  /**
   * The status of the income sources. `ACTIVE`: The income source is active. `INACTIVE`: The income
   * source is inactive. `UNKNOWN`: The income source status is unknown.
   */
  status?: CraBankIncomeStatus;
  /**
   * An estimate of the average gross monthly income based on the historical net amount and income
   * category for the income source(s).
   */
  historicalAverageMonthlyGrossIncome?: number | null;
  /**
   * The average monthly net income amount estimated based on the historical data for the income
   * source(s).
   */
  historicalAverageMonthlyIncome?: number | null;
  /** The predicted average monthly net income amount for the income source(s). */
  forecastedAverageMonthlyIncome?: number | null;
  /** The prediction interval(s) for the forecasted average monthly income. */
  forecastedAverageMonthlyIncomePredictionIntervals: CraPredictionInterval[];
  /** The object containing employer data. */
  employer?: CraBankIncomeEmployer;
  /** The object containing data about the income provider. */
  incomeProvider: CraBankIncomeIncomeProvider | null;
  historicalSummary?: CraBankIncomeHistoricalSummary[];
};

export const craBankIncomeSourceSchema: Schema<CraBankIncomeSource> = s.object<CraBankIncomeSource>({
  accountId: s.optional(s.string()),
  incomeSourceId: s.optional(s.string()),
  incomeDescription: s.optional(s.string()),
  incomeCategory: s.optional(s.lazy(() => creditBankIncomeCategorySchema)),
  startDate: s.optional(s.dateOnly()),
  endDate: s.optional(s.dateOnly()),
  payFrequency: s.optional(s.lazy(() => creditBankIncomePayFrequencySchema)),
  totalAmount: s.optional(s.float64()),
  isoCurrencyCode: s.optionalNullable(s.string()),
  unofficialCurrencyCode: s.optionalNullable(s.string()),
  transactionCount: s.optional(s.int()),
  nextPaymentDate: s.optionalNullable(s.dateOnly()),
  status: s.optional(s.lazy(() => craBankIncomeStatusSchema)),
  historicalAverageMonthlyGrossIncome: s.optionalNullable(s.float64()),
  historicalAverageMonthlyIncome: s.optionalNullable(s.float64()),
  forecastedAverageMonthlyIncome: s.optionalNullable(s.float64()),
  forecastedAverageMonthlyIncomePredictionIntervals: s.array(s.lazy(() => craPredictionIntervalSchema)),
  employer: s.optional(s.lazy(() => craBankIncomeEmployerSchema)),
  incomeProvider: s.nullable(s.lazy(() => craBankIncomeIncomeProviderSchema)),
  historicalSummary: s.optional(s.array(s.lazy(() => craBankIncomeHistoricalSummarySchema))),
  _keysMap: {
    accountId: "account_id",
    incomeSourceId: "income_source_id",
    incomeDescription: "income_description",
    incomeCategory: "income_category",
    startDate: "start_date",
    endDate: "end_date",
    payFrequency: "pay_frequency",
    totalAmount: "total_amount",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    transactionCount: "transaction_count",
    nextPaymentDate: "next_payment_date",
    historicalAverageMonthlyGrossIncome: "historical_average_monthly_gross_income",
    historicalAverageMonthlyIncome: "historical_average_monthly_income",
    forecastedAverageMonthlyIncome: "forecasted_average_monthly_income",
    forecastedAverageMonthlyIncomePredictionIntervals:
      "forecasted_average_monthly_income_prediction_intervals",
    incomeProvider: "income_provider",
    historicalSummary: "historical_summary",
  },
});
