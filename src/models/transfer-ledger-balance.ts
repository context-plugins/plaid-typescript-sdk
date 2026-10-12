import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the balance of the ledger held with Plaid. */
export type TransferLedgerBalance = {
  /**
   * The amount of this balance available for use (decimal string with two digits of precision e.g.
   * "10.00").
   */
  available: string;
  /**
   * The amount of pending funds that are in processing (decimal string with two digits of precision
   * e.g. "10.00").
   */
  pending: string;
};

export const transferLedgerBalanceSchema: Schema<TransferLedgerBalance> = s.object<TransferLedgerBalance>({
  available: s.string(),
  pending: s.string(),
});
