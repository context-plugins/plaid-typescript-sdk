import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BankTransferType = {
  Debit: "debit",
  Credit: "credit",
} as const;
export type BankTransferType = (typeof BankTransferType)[keyof typeof BankTransferType] | (string & {});

export const bankTransferTypeSchema: EnumSchema<BankTransferType> =
  s.enumOf<BankTransferType>(BankTransferType);
