import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferType = {
  Debit: "debit",
  Credit: "credit",
} as const;
export type TransferType = (typeof TransferType)[keyof typeof TransferType] | (string & {});

export const transferTypeSchema: EnumSchema<TransferType> = s.enumOf<TransferType>(TransferType);
