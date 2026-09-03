import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransactionCode = {
  Adjustment: "adjustment",
  Atm: "atm",
  BankCharge: "bank charge",
  BillPayment: "bill payment",
  Cash: "cash",
  CashAdvance: "cash advance",
  Cashback: "cashback",
  Cheque: "cheque",
  DirectDebit: "direct debit",
  Interest: "interest",
  LateFee: "late fee",
  MembershipFee: "membership fee",
  Payment: "payment",
  Purchase: "purchase",
  Refund: "refund",
  ReturnedItemFee: "returned item fee",
  StandingOrder: "standing order",
  Transfer: "transfer",
} as const;
export type TransactionCode = (typeof TransactionCode)[keyof typeof TransactionCode] | (string & {});

export const transactionCodeSchema: EnumSchema<TransactionCode> = s.enumOf<TransactionCode>(TransactionCode);
