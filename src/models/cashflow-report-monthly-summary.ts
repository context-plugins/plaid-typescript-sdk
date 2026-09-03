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

export type CashflowReportMonthlySummary = {
  startDate: string;
  endDate: string;
  startingBalance: CashflowReportMonthlySummaryStartingBalance | null;
  endingBalance: CashflowReportMonthlySummaryEndingBalance | null;
  averageDailyEndingBalance: CashflowReportMonthlySummaryAverageDailyEndingBalance;
  averageDailyInflowAmount: CashflowReportMonthlySummaryAverageDailyInflowAmount;
  averageDailyOutflowAmount: CashflowReportMonthlySummaryAverageDailyOutflowAmount;
  averageDailyNetCashflowAmount: CashflowReportMonthlySummaryAverageDailyNetCashflowAmount;
  averageDailyInflowTransactionCount: number;
  averageDailyOutflowTransactionCount: number;
  totalRevenue: CashflowReportMonthlySummaryTotalRevenue;
  totalLoanPayment: CashflowReportMonthlySummaryTotalLoanPayment;
  totalVariableExpense: CashflowReportMonthlySummaryTotalVariableExpense;
  totalPayroll: CashflowReportMonthlySummaryTotalPayroll;
  nsfTransactionCount: number;
  overdraftTransactionCount: number;
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
    averageDailyInflowTransactionCount: s.number(),
    averageDailyOutflowTransactionCount: s.number(),
    totalRevenue: cashflowReportMonthlySummaryTotalRevenueSchema,
    totalLoanPayment: cashflowReportMonthlySummaryTotalLoanPaymentSchema,
    totalVariableExpense: cashflowReportMonthlySummaryTotalVariableExpenseSchema,
    totalPayroll: cashflowReportMonthlySummaryTotalPayrollSchema,
    nsfTransactionCount: s.number(),
    overdraftTransactionCount: s.number(),
    negativeEndingBalanceDayCount: s.number(),
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
