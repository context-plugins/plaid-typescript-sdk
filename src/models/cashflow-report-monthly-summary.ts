import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cashflowReportMonthlySummaryAverageDailyEndingBalanceSchema,
  type CashflowReportMonthlySummaryAverageDailyEndingBalance,
} from "./cashflow-report-monthly-summary-average-daily-ending-balance.js";
import {
  cashflowReportMonthlySummaryAverageDailyInflowAmountSchema,
  type CashflowReportMonthlySummaryAverageDailyInflowAmount,
} from "./cashflow-report-monthly-summary-average-daily-inflow-amount.js";
import {
  cashflowReportMonthlySummaryAverageDailyNetCashflowAmountSchema,
  type CashflowReportMonthlySummaryAverageDailyNetCashflowAmount,
} from "./cashflow-report-monthly-summary-average-daily-net-cashflow-amount.js";
import {
  cashflowReportMonthlySummaryAverageDailyOutflowAmountSchema,
  type CashflowReportMonthlySummaryAverageDailyOutflowAmount,
} from "./cashflow-report-monthly-summary-average-daily-outflow-amount.js";
import {
  cashflowReportMonthlySummaryEndingBalanceSchema,
  type CashflowReportMonthlySummaryEndingBalance,
} from "./cashflow-report-monthly-summary-ending-balance.js";
import {
  cashflowReportMonthlySummaryStartingBalanceSchema,
  type CashflowReportMonthlySummaryStartingBalance,
} from "./cashflow-report-monthly-summary-starting-balance.js";
import {
  cashflowReportMonthlySummaryTotalLoanPaymentSchema,
  type CashflowReportMonthlySummaryTotalLoanPayment,
} from "./cashflow-report-monthly-summary-total-loan-payment.js";
import {
  cashflowReportMonthlySummaryTotalPayrollSchema,
  type CashflowReportMonthlySummaryTotalPayroll,
} from "./cashflow-report-monthly-summary-total-payroll.js";
import {
  cashflowReportMonthlySummaryTotalRevenueSchema,
  type CashflowReportMonthlySummaryTotalRevenue,
} from "./cashflow-report-monthly-summary-total-revenue.js";
import {
  cashflowReportMonthlySummaryTotalVariableExpenseSchema,
  type CashflowReportMonthlySummaryTotalVariableExpense,
} from "./cashflow-report-monthly-summary-total-variable-expense.js";

/** Monthly summary statistics derived from transaction-level data. */
export type CashflowReportMonthlySummary = {
  /**
   * The start date of the period covered in this monthly summary.
   *
   * This date will be the first day of the month, unless the month being covered is a partial month
   * because it is the first month included in the summary and the date range being requested does
   * not begin with the first day of the month.
   *
   * The date will be returned in an ISO 8601 format (YYYY-MM-DD).
   */
  startDate: string;
  /**
   * The end date of the period included in this monthly summary.
   *
   * This date will be the last day of the month, unless the month being covered is a partial month
   * because it is the last month included in the summary and the date range being requested does
   * not end with the last day of the month.
   *
   * The date will be returned in an ISO 8601 format (YYYY-MM-DD).
   */
  endDate: string;
  /**
   * The starting balance of the month. This will be the same as the ending balance of the previous
   * month. This field will not be available for the first monthly summary.
   */
  startingBalance: CashflowReportMonthlySummaryStartingBalance | null;
  /**
   * The ending balance of the month. This will be the same as the starting balance of the next
   * month. This field will not be available for the last monthly summary.
   */
  endingBalance: CashflowReportMonthlySummaryEndingBalance | null;
  /** Calendar-day average of the ending balance. */
  averageDailyEndingBalance: CashflowReportMonthlySummaryAverageDailyEndingBalance;
  /**
   * The average daily sum of inflow transactions, calculated over the month. Always represented as
   * a positive monetary amount.
   */
  averageDailyInflowAmount: CashflowReportMonthlySummaryAverageDailyInflowAmount;
  /**
   * The average daily sum of outflow transactions, calculated over the month. Always represented as
   * a positive monetary amount.
   */
  averageDailyOutflowAmount: CashflowReportMonthlySummaryAverageDailyOutflowAmount;
  /**
   * The average daily net cash flow amount, calculated as total daily inflows less total daily
   * outflows.
   */
  averageDailyNetCashflowAmount: CashflowReportMonthlySummaryAverageDailyNetCashflowAmount;
  /** The average count of the number of daily inflow transactions. Rounded to 2 decimal places. */
  averageDailyInflowTransactionCount: number;
  /** The average count of the number of daily outflow transactions. Rounded to 2 decimal places. */
  averageDailyOutflowTransactionCount: number;
  /** The total amount of all revenue transactions during this month. */
  totalRevenue: CashflowReportMonthlySummaryTotalRevenue;
  /** The total amount of all loan payment transactions during this month. */
  totalLoanPayment: CashflowReportMonthlySummaryTotalLoanPayment;
  /** The total amount of all variable expense transactions during this month. */
  totalVariableExpense: CashflowReportMonthlySummaryTotalVariableExpense;
  /** The total amount of all payroll transactions during this month. */
  totalPayroll: CashflowReportMonthlySummaryTotalPayroll;
  /** The total number of all NSF transactions during this month. */
  nsfTransactionCount: number;
  /** The total number of all overdraft transactions during this month. */
  overdraftTransactionCount: number;
  /**
   * The number of days with a negative daily average ending balance. The daily average is
   * calculated across all valid accounts. Values will be in the range [0, 31].
   */
  negativeEndingBalanceDayCount: number;
};

export const cashflowReportMonthlySummarySchema: Schema<CashflowReportMonthlySummary> =
  s.object<CashflowReportMonthlySummary>({
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    startingBalance: s.nullable(s.lazy(() => cashflowReportMonthlySummaryStartingBalanceSchema)),
    endingBalance: s.nullable(s.lazy(() => cashflowReportMonthlySummaryEndingBalanceSchema)),
    averageDailyEndingBalance: cashflowReportMonthlySummaryAverageDailyEndingBalanceSchema,
    averageDailyInflowAmount: cashflowReportMonthlySummaryAverageDailyInflowAmountSchema,
    averageDailyOutflowAmount: cashflowReportMonthlySummaryAverageDailyOutflowAmountSchema,
    averageDailyNetCashflowAmount: cashflowReportMonthlySummaryAverageDailyNetCashflowAmountSchema,
    averageDailyInflowTransactionCount: s.float64(),
    averageDailyOutflowTransactionCount: s.float64(),
    totalRevenue: cashflowReportMonthlySummaryTotalRevenueSchema,
    totalLoanPayment: cashflowReportMonthlySummaryTotalLoanPaymentSchema,
    totalVariableExpense: cashflowReportMonthlySummaryTotalVariableExpenseSchema,
    totalPayroll: cashflowReportMonthlySummaryTotalPayrollSchema,
    nsfTransactionCount: s.int(),
    overdraftTransactionCount: s.int(),
    negativeEndingBalanceDayCount: s.int(),
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
      startingBalance: "starting_balance",
      endingBalance: "ending_balance",
      averageDailyEndingBalance: "average_daily_ending_balance",
      averageDailyInflowAmount: "average_daily_inflow_amount",
      averageDailyOutflowAmount: "average_daily_outflow_amount",
      averageDailyNetCashflowAmount: "average_daily_net_cashflow_amount",
      averageDailyInflowTransactionCount: "average_daily_inflow_transaction_count",
      averageDailyOutflowTransactionCount: "average_daily_outflow_transaction_count",
      totalRevenue: "total_revenue",
      totalLoanPayment: "total_loan_payment",
      totalVariableExpense: "total_variable_expense",
      totalPayroll: "total_payroll",
      nsfTransactionCount: "nsf_transaction_count",
      overdraftTransactionCount: "overdraft_transaction_count",
      negativeEndingBalanceDayCount: "negative_ending_balance_day_count",
    },
  });
