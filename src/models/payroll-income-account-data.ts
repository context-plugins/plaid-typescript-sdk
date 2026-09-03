import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payrollIncomeRateOfPaySchema, type PayrollIncomeRateOfPay } from "./payroll-income-rate-of-pay.js";

export type PayrollIncomeAccountData = {
  accountId: string | null;
  rateOfPay: PayrollIncomeRateOfPay;
  payFrequency: string | null;
};

export const payrollIncomeAccountDataSchema: Schema<PayrollIncomeAccountData> =
  s.object<PayrollIncomeAccountData>({
    accountId: s.nullable(s.string()),
    rateOfPay: payrollIncomeRateOfPaySchema,
    payFrequency: s.nullable(s.string()),
    _keysMap: {
      accountId: "account_id",
      rateOfPay: "rate_of_pay",
      payFrequency: "pay_frequency",
    },
  });
