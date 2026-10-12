import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object representing the rate at which an individual is paid. */
export type PayrollIncomeRateOfPay = {
  /** The rate at which an employee is paid. */
  payRate?: string | null;
  /** The amount at which an employee is paid. */
  payAmount?: number | null;
};

export const payrollIncomeRateOfPaySchema: Schema<PayrollIncomeRateOfPay> = s.object<PayrollIncomeRateOfPay>({
  payRate: s.optionalNullable(s.string()),
  payAmount: s.optionalNullable(s.float64()),
  _keysMap: {
    payRate: "pay_rate",
    payAmount: "pay_amount",
  },
});
