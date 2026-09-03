import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditAccountSubtype = {
  CreditCard: "credit card",
  Paypal: "paypal",
  All: "all",
} as const;
export type CreditAccountSubtype =
  | (typeof CreditAccountSubtype)[keyof typeof CreditAccountSubtype]
  | (string & {});

export const creditAccountSubtypeSchema: EnumSchema<CreditAccountSubtype> =
  s.enumOf<CreditAccountSubtype>(CreditAccountSubtype);
