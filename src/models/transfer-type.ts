import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of transfer. This will be either `debit` or `credit`. A `debit` indicates a transfer of
 * money into the origination account; a `credit` indicates a transfer of money out of the
 * origination account.
 */
export const TransferType = {
  Debit: "debit",
  Credit: "credit",
} as const;
export type TransferType = (typeof TransferType)[keyof typeof TransferType] | (string & {});

export const transferTypeSchema: EnumSchema<TransferType> = s.enumOf<TransferType>(TransferType);
