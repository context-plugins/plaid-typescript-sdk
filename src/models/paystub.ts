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

/** An object representing data extracted from the end user's paystub. */
export type Paystub = {
  /** An object with the deduction information found on a paystub. */
  deductions: Deductions;
  /** An identifier of the document referenced by the document metadata. */
  docId: string;
  /** An object representing both a breakdown of earnings on a paystub and the total earnings. */
  earnings: Earnings;
  /** Data about the employee. */
  employee: Employee;
  /** Information about the employer on the paystub */
  employer: PaystubEmployer;
  /**
   * An object representing employment details found on a paystub.
   *
   * @deprecated
   */
  employmentDetails?: EmploymentDetails;
  /** An object representing information about the net pay amount on the paystub. */
  netPay: NetPay;
  /** Details about the pay period. */
  payPeriodDetails: PayPeriodDetails;
  /**
   * An object representing details that can be found on the paystub.
   *
   * @deprecated
   */
  paystubDetails?: PaystubDetails;
  /**
   * @deprecated
   */
  incomeBreakdown?: IncomeBreakdown[];
  /**
   * The amount of income earned year to date, as based on paystub data.
   *
   * @deprecated
   */
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
