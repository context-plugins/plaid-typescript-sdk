import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of bank transfer. This will be either `debit` or `credit`. A `debit` indicates a
 * transfer of money into your origination account; a `credit` indicates a transfer of money out of
 * your origination account.
 */
export const BankTransferEventListBankTransferType = {
  Debit: "debit",
  Credit: "credit",
} as const;
export type BankTransferEventListBankTransferType =
  | (typeof BankTransferEventListBankTransferType)[keyof typeof BankTransferEventListBankTransferType]
  | (string & {});

export const bankTransferEventListBankTransferTypeSchema: EnumSchema<BankTransferEventListBankTransferType> =
  s.enumOf<BankTransferEventListBankTransferType>(BankTransferEventListBankTransferType);
