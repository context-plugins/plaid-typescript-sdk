import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Asset Transaction Type. */
export const AssetTransactionType = {
  Credit: "Credit",
  Debit: "Debit",
} as const;
export type AssetTransactionType =
  | (typeof AssetTransactionType)[keyof typeof AssetTransactionType]
  | (string & {});

export const assetTransactionTypeSchema: EnumSchema<AssetTransactionType> =
  s.enumOf<AssetTransactionType>(AssetTransactionType);
