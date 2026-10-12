import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  employeeIncomeSummaryFieldStringSchema,
  type EmployeeIncomeSummaryFieldString,
} from "./employee-income-summary-field-string.js";
import {
  employerIncomeSummaryFieldStringSchema,
  type EmployerIncomeSummaryFieldString,
} from "./employer-income-summary-field-string.js";
import { payFrequencySchema, type PayFrequency } from "./pay-frequency.js";
import {
  projectedIncomeSummaryFieldNumberSchema,
  type ProjectedIncomeSummaryFieldNumber,
} from "./projected-income-summary-field-number.js";
import { transactionDataSchema, type TransactionData } from "./transaction-data.js";
import {
  ytdGrossIncomeSummaryFieldNumberSchema,
  type YtdGrossIncomeSummaryFieldNumber,
} from "./ytd-gross-income-summary-field-number.js";
import {
  ytdNetIncomeSummaryFieldNumberSchema,
  type YtdNetIncomeSummaryFieldNumber,
} from "./ytd-net-income-summary-field-number.js";

/**
 * The verified fields from a paystub verification. All fields are provided as reported on the
 * paystub.
 */
export type IncomeSummary = {
  /** The name of the employer, as reported on the paystub. */
  employerName: EmployerIncomeSummaryFieldString | null;
  /** The name of the employee, as reported on the paystub. */
  employeeName: EmployeeIncomeSummaryFieldString | null;
  /** Year-to-date pre-tax earnings, as reported on the paystub. */
  ytdGrossIncome: YtdGrossIncomeSummaryFieldNumber | null;
  /**
   * Year-to-date earnings after any tax withholdings, benefit payments or deductions, as reported
   * on the paystub.
   */
  ytdNetIncome: YtdNetIncomeSummaryFieldNumber | null;
  /** The frequency of the pay period. */
  payFrequency: PayFrequency | null;
  /**
   * The employee's estimated annual salary, as derived from information reported on the paystub.
   */
  projectedWage: ProjectedIncomeSummaryFieldNumber | null;
  /**
   * Information about the matched direct deposit transaction used to verify a user's payroll
   * information.
   */
  verifiedTransaction: TransactionData | null;
};

export const incomeSummarySchema: Schema<IncomeSummary> = s.object<IncomeSummary>({
  employerName: s.nullable(s.lazy(() => employerIncomeSummaryFieldStringSchema)),
  employeeName: s.nullable(s.lazy(() => employeeIncomeSummaryFieldStringSchema)),
  ytdGrossIncome: s.nullable(s.lazy(() => ytdGrossIncomeSummaryFieldNumberSchema)),
  ytdNetIncome: s.nullable(s.lazy(() => ytdNetIncomeSummaryFieldNumberSchema)),
  payFrequency: s.nullable(s.lazy(() => payFrequencySchema)),
  projectedWage: s.nullable(s.lazy(() => projectedIncomeSummaryFieldNumberSchema)),
  verifiedTransaction: s.nullable(s.lazy(() => transactionDataSchema)),
  _keysMap: {
    employerName: "employer_name",
    employeeName: "employee_name",
    ytdGrossIncome: "ytd_gross_income",
    ytdNetIncome: "ytd_net_income",
    payFrequency: "pay_frequency",
    projectedWage: "projected_wage",
    verifiedTransaction: "verified_transaction",
  },
});
