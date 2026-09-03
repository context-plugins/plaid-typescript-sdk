import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CraLoanType = {
  Personal: "PERSONAL",
  CreditCard: "CREDIT_CARD",
  Business: "BUSINESS",
  Mortgage: "MORTGAGE",
  Auto: "AUTO",
  Payday: "PAYDAY",
  Student: "STUDENT",
  HomeEquity: "HOME_EQUITY",
  Other: "OTHER",
} as const;
export type CraLoanType = (typeof CraLoanType)[keyof typeof CraLoanType] | (string & {});

export const craLoanTypeSchema: EnumSchema<CraLoanType> = s.enumOf<CraLoanType>(CraLoanType);
