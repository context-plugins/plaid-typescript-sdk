import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AprType = {
  BalanceTransferApr: "balance_transfer_apr",
  CashApr: "cash_apr",
  PurchaseApr: "purchase_apr",
  Special: "special",
} as const;
export type AprType = (typeof AprType)[keyof typeof AprType] | (string & {});

export const aprTypeSchema: EnumSchema<AprType> = s.enumOf<AprType>(AprType);
