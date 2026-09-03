import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deductionsSchema, type Deductions } from "./deductions.js";
import { earningsSchema, type Earnings } from "./earnings.js";
import { employeeSchema, type Employee } from "./employee.js";
import { employmentDetailsSchema, type EmploymentDetails } from "./employment-details.js";
import { incomeBreakdownSchema, type IncomeBreakdown } from "./income-breakdown.js";
import { netPaySchema, type NetPay } from "./net-pay.js";
import { payPeriodDetailsSchema, type PayPeriodDetails } from "./pay-period-details.js";
import { paystubDetailsSchema, type PaystubDetails } from "./paystub-details.js";
import { paystubEmployerSchema, type PaystubEmployer } from "./paystub-employer.js";
import { paystubYtdDetailsSchema, type PaystubYtdDetails } from "./paystub-ytd-details.js";

export type Paystub = {
  deductions: Deductions;
  docId: string;
  earnings: Earnings;
  employee: Employee;
  employer: PaystubEmployer;
  employmentDetails?: EmploymentDetails;
  netPay: NetPay;
  payPeriodDetails: PayPeriodDetails;
  paystubDetails?: PaystubDetails;
  incomeBreakdown?: IncomeBreakdown[];
  ytdEarnings?: PaystubYtdDetails;
};

export const paystubSchema: Schema<Paystub> = s.object<Paystub>({
  deductions: deductionsSchema,
  docId: s.string(),
  earnings: earningsSchema,
  employee: employeeSchema,
  employer: paystubEmployerSchema,
  employmentDetails: s.optional(s.lazy(() => employmentDetailsSchema)),
  netPay: netPaySchema,
  payPeriodDetails: payPeriodDetailsSchema,
  paystubDetails: s.optional(s.lazy(() => paystubDetailsSchema)),
  incomeBreakdown: s.optional(s.array(s.lazy(() => incomeBreakdownSchema))),
  ytdEarnings: s.optional(s.lazy(() => paystubYtdDetailsSchema)),
  _keysMap: {
    docId: "doc_id",
    employmentDetails: "employment_details",
    netPay: "net_pay",
    payPeriodDetails: "pay_period_details",
    paystubDetails: "paystub_details",
    incomeBreakdown: "income_breakdown",
    ytdEarnings: "ytd_earnings",
  },
});
