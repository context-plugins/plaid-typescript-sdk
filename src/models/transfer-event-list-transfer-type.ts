import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferEventListTransferType = {
  Debit: "debit",
  Credit: "credit",
} as const;
export type TransferEventListTransferType =
  | (typeof TransferEventListTransferType)[keyof typeof TransferEventListTransferType]
  | (string & {});

export const transferEventListTransferTypeSchema: EnumSchema<TransferEventListTransferType> =
  s.enumOf<TransferEventListTransferType>(TransferEventListTransferType);
