import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { incomeBreakdownSchema, type IncomeBreakdown } from "./income-breakdown.js";
import {
  paystubOverrideDeductionsSchema,
  type PaystubOverrideDeductions,
} from "./paystub-override-deductions.js";
import { paystubOverrideEarningsSchema, type PaystubOverrideEarnings } from "./paystub-override-earnings.js";
import { paystubOverrideEmployeeSchema, type PaystubOverrideEmployee } from "./paystub-override-employee.js";
import { paystubOverrideEmployerSchema, type PaystubOverrideEmployer } from "./paystub-override-employer.js";
import { paystubOverrideNetPaySchema, type PaystubOverrideNetPay } from "./paystub-override-net-pay.js";
import {
  paystubOverridePayPeriodDetailsSchema,
  type PaystubOverridePayPeriodDetails,
} from "./paystub-override-pay-period-details.js";

export type PaystubOverride = {
  employer?: PaystubOverrideEmployer;
  employee?: PaystubOverrideEmployee;
  incomeBreakdown?: IncomeBreakdown[];
  netPay?: PaystubOverrideNetPay;
  deductions?: PaystubOverrideDeductions;
  earnings?: PaystubOverrideEarnings;
  payPeriodDetails?: PaystubOverridePayPeriodDetails;
};

export const paystubOverrideSchema: Schema<PaystubOverride> = s.object<PaystubOverride>({
  employer: s.optional(s.lazy(() => paystubOverrideEmployerSchema)),
  employee: s.optional(s.lazy(() => paystubOverrideEmployeeSchema)),
  incomeBreakdown: s.optional(s.array(s.lazy(() => incomeBreakdownSchema))),
  netPay: s.optional(s.lazy(() => paystubOverrideNetPaySchema)),
  deductions: s.optional(s.lazy(() => paystubOverrideDeductionsSchema)),
  earnings: s.optional(s.lazy(() => paystubOverrideEarningsSchema)),
  payPeriodDetails: s.optional(s.lazy(() => paystubOverridePayPeriodDetailsSchema)),
  _keysMap: {
    incomeBreakdown: "income_breakdown",
    netPay: "net_pay",
    payPeriodDetails: "pay_period_details",
  },
});
