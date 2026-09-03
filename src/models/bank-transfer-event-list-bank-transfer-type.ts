import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BankTransferEventListBankTransferType = {
  Debit: "debit",
  Credit: "credit",
} as const;
export type BankTransferEventListBankTransferType =
  | (typeof BankTransferEventListBankTransferType)[keyof typeof BankTransferEventListBankTransferType]
  | (string & {});

export const bankTransferEventListBankTransferTypeSchema: EnumSchema<BankTransferEventListBankTransferType> =
  s.enumOf<BankTransferEventListBankTransferType>(BankTransferEventListBankTransferType);
