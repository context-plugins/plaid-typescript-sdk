import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The failure reason if the type of this transfer is `"failed"` or `"reversed"`. Null value
 * otherwise.
 */
export type BankTransferFailure = {
  /**
   * The ACH return code, e.g. `R01`. A return code will be provided if and only if the transfer
   * status is `reversed`. For a full listing of ACH return codes, see [Bank Transfers
   * errors](https://plaid.com/docs/errors/bank-transfers/#ach-return-codes).
   */
  achReturnCode?: string | null;
  /** A human-readable description of the reason for the failure or reversal. */
  description?: string;
};

export const bankTransferFailureSchema: Schema<BankTransferFailure> = s.object<BankTransferFailure>({
  achReturnCode: s.optionalNullable(s.string()),
  description: s.optional(s.string()),
  _keysMap: {
    achReturnCode: "ach_return_code",
  },
});
