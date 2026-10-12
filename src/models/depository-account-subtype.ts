import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Valid account subtypes for depository accounts. For a list containing descriptions of each
 * subtype, see [Account
 * schemas](https://plaid.com/docs/api/accounts/#StandaloneAccountType-depository).
 */
export const DepositoryAccountSubtype = {
  Checking: "checking",
  Savings: "savings",
  Hsa: "hsa",
  Cd: "cd",
  MoneyMarket: "money market",
  Paypal: "paypal",
  Prepaid: "prepaid",
  CashManagement: "cash management",
  Ebt: "ebt",
  LimitedPurposeChecking: "limited purpose checking",
  All: "all",
} as const;
export type DepositoryAccountSubtype =
  | (typeof DepositoryAccountSubtype)[keyof typeof DepositoryAccountSubtype]
  | (string & {});

export const depositoryAccountSubtypeSchema: EnumSchema<DepositoryAccountSubtype> =
  s.enumOf<DepositoryAccountSubtype>(DepositoryAccountSubtype);
