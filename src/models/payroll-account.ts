import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A payroll account. */
export const PayrollAccount = {
  Payroll: "payroll",
} as const;
export type PayrollAccount = (typeof PayrollAccount)[keyof typeof PayrollAccount] | (string & {});

export const payrollAccountSchema: EnumSchema<PayrollAccount> = s.enumOf<PayrollAccount>(PayrollAccount);
