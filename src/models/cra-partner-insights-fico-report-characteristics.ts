import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraPartnerInsightsFicoReportCharacteristics = {
  numAccounts?: number | null;
  avgDailyBalanceOver1Month?: number | null;
  avgDailyBalanceOver3Months?: number | null;
  avgDailyBalanceOver6Months?: number | null;
  avgDailyBalanceOver12Months?: number | null;
  daysSinceEarliestTx?: number | null;
  daysSinceMostRecentNegativeEndingBalance?: number | null;
  daysSinceMostRecentInsufficientFundsFeeDebitTx?: number | null;
  totNumberDaysWithNegativeBalanceOver1Month?: number | null;
  totNumberDaysWithNegativeBalanceOver3Months?: number | null;
  totNumberDaysWithNegativeBalanceOver6Months?: number | null;
  totNumberDaysWithNegativeBalanceOver12Months?: number | null;
  daysSinceMostRecentTx?: number | null;
  daysWithTxOver1Month?: number | null;
  daysWithTxOver3Months?: number | null;
  daysWithTxOver6Months?: number | null;
  daysWithTxOver12Months?: number | null;
  totCurrentBalances?: number | null;
  numCheckingAccounts?: number | null;
  numMoneyMarketAccounts?: number | null;
  numSavingsAccounts?: number | null;
};

export const craPartnerInsightsFicoReportCharacteristicsSchema: Schema<CraPartnerInsightsFicoReportCharacteristics> =
  s.object<CraPartnerInsightsFicoReportCharacteristics>({
    numAccounts: s.optionalNullable(s.number()),
    avgDailyBalanceOver1Month: s.optionalNullable(s.number()),
    avgDailyBalanceOver3Months: s.optionalNullable(s.number()),
    avgDailyBalanceOver6Months: s.optionalNullable(s.number()),
    avgDailyBalanceOver12Months: s.optionalNullable(s.number()),
    daysSinceEarliestTx: s.optionalNullable(s.number()),
    daysSinceMostRecentNegativeEndingBalance: s.optionalNullable(s.number()),
    daysSinceMostRecentInsufficientFundsFeeDebitTx: s.optionalNullable(s.number()),
    totNumberDaysWithNegativeBalanceOver1Month: s.optionalNullable(s.number()),
    totNumberDaysWithNegativeBalanceOver3Months: s.optionalNullable(s.number()),
    totNumberDaysWithNegativeBalanceOver6Months: s.optionalNullable(s.number()),
    totNumberDaysWithNegativeBalanceOver12Months: s.optionalNullable(s.number()),
    daysSinceMostRecentTx: s.optionalNullable(s.number()),
    daysWithTxOver1Month: s.optionalNullable(s.number()),
    daysWithTxOver3Months: s.optionalNullable(s.number()),
    daysWithTxOver6Months: s.optionalNullable(s.number()),
    daysWithTxOver12Months: s.optionalNullable(s.number()),
    totCurrentBalances: s.optionalNullable(s.number()),
    numCheckingAccounts: s.optionalNullable(s.number()),
    numMoneyMarketAccounts: s.optionalNullable(s.number()),
    numSavingsAccounts: s.optionalNullable(s.number()),
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
