import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the balance of a bank transfer */
export type BankTransferBalance = {
  /**
   * The total available balance - the sum of all successful debit transfer amounts minus all credit
   * transfer amounts.
   */
  available: string;
  /**
   * The transactable balance shows the amount in your account that you are able to use for
   * transfers, and is essentially your available balance minus your minimum balance.
   */
  transactable: string;
};

export const bankTransferBalanceSchema: Schema<BankTransferBalance> = s.object<BankTransferBalance>({
  available: s.string(),
  transactable: s.string(),
});
