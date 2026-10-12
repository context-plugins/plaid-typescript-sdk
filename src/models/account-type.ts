import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `investment:` Investment account. In API versions 2018-05-22 and earlier, this type is called
 * `brokerage` instead.
 *
 * `credit:` Credit card
 *
 * `depository:` Depository account
 *
 * `loan:` Loan account
 *
 * `other:` Non-specified account type
 *
 * See the [Account type schema](https://plaid.com/docs/api/accounts#account-type-schema) for a full
 * listing of account types and corresponding subtypes.
 */
export const AccountType = {
  Investment: "investment",
  Credit: "credit",
  Depository: "depository",
  Loan: "loan",
  Brokerage: "brokerage",
  Other: "other",
} as const;
export type AccountType = (typeof AccountType)[keyof typeof AccountType] | (string & {});

export const accountTypeSchema: EnumSchema<AccountType> = s.enumOf<AccountType>(AccountType);
