import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DepositoryAccount = {
  CashManagement: "cash management",
  Cd: "cd",
  Checking: "checking",
  Ebt: "ebt",
  Hsa: "hsa",
  LimitedPurposeChecking: "limited purpose checking",
  MoneyMarket: "money market",
  Paypal: "paypal",
  Prepaid: "prepaid",
  Savings: "savings",
} as const;
export type DepositoryAccount = (typeof DepositoryAccount)[keyof typeof DepositoryAccount] | (string & {});

export const depositoryAccountSchema: EnumSchema<DepositoryAccount> =
  s.enumOf<DepositoryAccount>(DepositoryAccount);
