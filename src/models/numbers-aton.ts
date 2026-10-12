import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Identifying information for transferring holdings to an investment account via ATON. */
export type NumbersAton = {
  /** The Plaid account ID associated with the account numbers */
  accountId: string;
  /** The full account number for the account */
  account: string;
};

export const numbersAtonSchema: Schema<NumbersAton> = s.object<NumbersAton>({
  accountId: s.string(),
  account: s.string(),
  _keysMap: {
    accountId: "account_id",
  },
});
