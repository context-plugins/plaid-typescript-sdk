import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payrollIncomeRateOfPaySchema, type PayrollIncomeRateOfPay } from "./payroll-income-rate-of-pay.js";

/** An object containing account level data. */
export type PayrollIncomeAccountData = {
  /** ID of the payroll provider account. */
  accountId: string | null;
  /** An object representing the rate at which an individual is paid. */
  rateOfPay: PayrollIncomeRateOfPay;
  /** The frequency at which an individual is paid. */
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
