import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `investment:` Investment account.
 *
 * `credit:` Credit card
 *
 * `depository:` Depository account
 *
 * `loan:` Loan account
 *
 * `payroll:` Payroll account
 *
 * `other:` Non-specified account type
 *
 * See the [Account type schema](https://plaid.com/docs/api/accounts#account-type-schema) for a full
 * listing of account types and corresponding subtypes.
 */
export const OverrideAccountType = {
  Investment: "investment",
  Credit: "credit",
  Depository: "depository",
  Loan: "loan",
  Payroll: "payroll",
  Other: "other",
} as const;
export type OverrideAccountType =
  | (typeof OverrideAccountType)[keyof typeof OverrideAccountType]
  | (string & {});

export const overrideAccountTypeSchema: EnumSchema<OverrideAccountType> =
  s.enumOf<OverrideAccountType>(OverrideAccountType);
