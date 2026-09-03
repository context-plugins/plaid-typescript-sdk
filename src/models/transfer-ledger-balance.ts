import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferLedgerBalance = {
  available: string;
  pending: string;
};

export const transferLedgerBalanceSchema: Schema<TransferLedgerBalance> = s.object<TransferLedgerBalance>({
  available: s.string(),
  pending: s.string(),
});
