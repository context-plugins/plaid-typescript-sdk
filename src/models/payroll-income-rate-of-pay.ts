import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayrollIncomeRateOfPay = {
  payRate?: string | null;
  payAmount?: number | null;
};

export const payrollIncomeRateOfPaySchema: Schema<PayrollIncomeRateOfPay> = s.object<PayrollIncomeRateOfPay>({
  payRate: s.optionalNullable(s.string()),
  payAmount: s.optionalNullable(s.number()),
  _keysMap: {
    payRate: "pay_rate",
    payAmount: "pay_amount",
  },
});
