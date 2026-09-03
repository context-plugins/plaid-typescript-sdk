import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditAccount = {
  CreditCard: "credit card",
  Paypal: "paypal",
} as const;
export type CreditAccount = (typeof CreditAccount)[keyof typeof CreditAccount] | (string & {});

export const creditAccountSchema: EnumSchema<CreditAccount> = s.enumOf<CreditAccount>(CreditAccount);
