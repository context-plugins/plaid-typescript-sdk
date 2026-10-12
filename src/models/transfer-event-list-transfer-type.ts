import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of transfer. This will be either `debit` or `credit`. A `debit` indicates a transfer of
 * money into your origination account; a `credit` indicates a transfer of money out of your
 * origination account.
 */
export const TransferEventListTransferType = {
  Debit: "debit",
  Credit: "credit",
} as const;
export type TransferEventListTransferType =
  | (typeof TransferEventListTransferType)[keyof typeof TransferEventListTransferType]
  | (string & {});

export const transferEventListTransferTypeSchema: EnumSchema<TransferEventListTransferType> =
  s.enumOf<TransferEventListTransferType>(TransferEventListTransferType);
