import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Report characteristics returned by FICO describing the banking data used to generate the
 * UltraFICO® score.
 */
export type CraPartnerInsightsFicoReportCharacteristics = {
  /**
   * Total number of accounts included in the report. Limited to checking, savings, and money market
   * accounts.
   */
  numAccounts?: number | null;
  /** Average daily balance over the past 1 month. */
  avgDailyBalanceOver1Month?: number | null;
  /** Average daily balance over the past 3 months. */
  avgDailyBalanceOver3Months?: number | null;
  /** Average daily balance over the past 6 months. */
  avgDailyBalanceOver6Months?: number | null;
  /** Average daily balance over the past 12 months. */
  avgDailyBalanceOver12Months?: number | null;
  /** Number of days since the earliest transaction in the report. */
  daysSinceEarliestTx?: number | null;
  /** Number of days since the most recent day with a negative ending balance. */
  daysSinceMostRecentNegativeEndingBalance?: number | null;
  /** Number of days since the most recent insufficient funds fee debit transaction. */
  daysSinceMostRecentInsufficientFundsFeeDebitTx?: number | null;
  /** Total number of days with a negative balance over the past 1 month. */
  totNumberDaysWithNegativeBalanceOver1Month?: number | null;
  /** Total number of days with a negative balance over the past 3 months. */
  totNumberDaysWithNegativeBalanceOver3Months?: number | null;
  /** Total number of days with a negative balance over the past 6 months. */
  totNumberDaysWithNegativeBalanceOver6Months?: number | null;
  /** Total number of days with a negative balance over the past 12 months. */
  totNumberDaysWithNegativeBalanceOver12Months?: number | null;
  /** Number of days since the most recent transaction. */
  daysSinceMostRecentTx?: number | null;
  /** Number of days with at least one transaction over the past 1 month. */
  daysWithTxOver1Month?: number | null;
  /** Number of days with at least one transaction over the past 3 months. */
  daysWithTxOver3Months?: number | null;
  /** Number of days with at least one transaction over the past 6 months. */
  daysWithTxOver6Months?: number | null;
  /** Number of days with at least one transaction over the past 12 months. */
  daysWithTxOver12Months?: number | null;
  /** Sum of current balances across all accounts in the report. */
  totCurrentBalances?: number | null;
  /** Number of checking accounts included in the report. */
  numCheckingAccounts?: number | null;
  /** Number of money market accounts included in the report. */
  numMoneyMarketAccounts?: number | null;
  /** Number of savings accounts included in the report. */
  numSavingsAccounts?: number | null;
};

export const craPartnerInsightsFicoReportCharacteristicsSchema: Schema<CraPartnerInsightsFicoReportCharacteristics> =
  s.object<CraPartnerInsightsFicoReportCharacteristics>({
    numAccounts: s.optionalNullable(s.int()),
    avgDailyBalanceOver1Month: s.optionalNullable(s.float64()),
    avgDailyBalanceOver3Months: s.optionalNullable(s.float64()),
    avgDailyBalanceOver6Months: s.optionalNullable(s.float64()),
    avgDailyBalanceOver12Months: s.optionalNullable(s.float64()),
    daysSinceEarliestTx: s.optionalNullable(s.int()),
    daysSinceMostRecentNegativeEndingBalance: s.optionalNullable(s.int()),
    daysSinceMostRecentInsufficientFundsFeeDebitTx: s.optionalNullable(s.int()),
    totNumberDaysWithNegativeBalanceOver1Month: s.optionalNullable(s.int()),
    totNumberDaysWithNegativeBalanceOver3Months: s.optionalNullable(s.int()),
    totNumberDaysWithNegativeBalanceOver6Months: s.optionalNullable(s.int()),
    totNumberDaysWithNegativeBalanceOver12Months: s.optionalNullable(s.int()),
    daysSinceMostRecentTx: s.optionalNullable(s.int()),
    daysWithTxOver1Month: s.optionalNullable(s.int()),
    daysWithTxOver3Months: s.optionalNullable(s.int()),
    daysWithTxOver6Months: s.optionalNullable(s.int()),
    daysWithTxOver12Months: s.optionalNullable(s.int()),
    totCurrentBalances: s.optionalNullable(s.float64()),
    numCheckingAccounts: s.optionalNullable(s.int()),
    numMoneyMarketAccounts: s.optionalNullable(s.int()),
    numSavingsAccounts: s.optionalNullable(s.int()),
    _keysMap: {
      numAccounts: "num_accounts",
      avgDailyBalanceOver1Month: "avg_daily_balance_over_1_month",
      avgDailyBalanceOver3Months: "avg_daily_balance_over_3_months",
      avgDailyBalanceOver6Months: "avg_daily_balance_over_6_months",
      avgDailyBalanceOver12Months: "avg_daily_balance_over_12_months",
      daysSinceEarliestTx: "days_since_earliest_tx",
      daysSinceMostRecentNegativeEndingBalance: "days_since_most_recent_negative_ending_balance",
      daysSinceMostRecentInsufficientFundsFeeDebitTx:
        "days_since_most_recent_insufficient_funds_fee_debit_tx",
      totNumberDaysWithNegativeBalanceOver1Month: "tot_number_days_with_negative_balance_over_1_month",
      totNumberDaysWithNegativeBalanceOver3Months: "tot_number_days_with_negative_balance_over_3_months",
      totNumberDaysWithNegativeBalanceOver6Months: "tot_number_days_with_negative_balance_over_6_months",
      totNumberDaysWithNegativeBalanceOver12Months: "tot_number_days_with_negative_balance_over_12_months",
      daysSinceMostRecentTx: "days_since_most_recent_tx",
      daysWithTxOver1Month: "days_with_tx_over_1_month",
      daysWithTxOver3Months: "days_with_tx_over_3_months",
      daysWithTxOver6Months: "days_with_tx_over_6_months",
      daysWithTxOver12Months: "days_with_tx_over_12_months",
      totCurrentBalances: "tot_current_balances",
      numCheckingAccounts: "num_checking_accounts",
      numMoneyMarketAccounts: "num_money_market_accounts",
      numSavingsAccounts: "num_savings_accounts",
    },
  });
