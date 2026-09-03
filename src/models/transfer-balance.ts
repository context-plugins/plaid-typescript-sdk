import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferBalanceTypeSchema, type TransferBalanceType } from "./transfer-balance-type.js";

export type TransferBalance = {
  available: string;
  current?: string;
  type: TransferBalanceType;
};

export const transferBalanceSchema: Schema<TransferBalance> = s.object<TransferBalance>({
  available: s.string(),
  current: s.optional(s.string()),
  type: transferBalanceTypeSchema,
});
