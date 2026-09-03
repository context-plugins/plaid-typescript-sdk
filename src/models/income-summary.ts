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

export type IncomeSummary = {
  employerName: EmployerIncomeSummaryFieldString | null;
  employeeName: EmployeeIncomeSummaryFieldString | null;
  ytdGrossIncome: YtdGrossIncomeSummaryFieldNumber | null;
  ytdNetIncome: YtdNetIncomeSummaryFieldNumber | null;
  payFrequency: PayFrequency | null;
  projectedWage: ProjectedIncomeSummaryFieldNumber | null;
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
