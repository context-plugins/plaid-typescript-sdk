import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BankTransferBalance = {
  available: string;
  transactable: string;
};

export const bankTransferBalanceSchema: Schema<BankTransferBalance> = s.object<BankTransferBalance>({
  available: s.string(),
  transactable: s.string(),
});
