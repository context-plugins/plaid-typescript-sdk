import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Identifying information for transferring holdings from a 401k account to another 401k account or
 * IRA via the manual 401k rollover process.
 */
export type NumbersRetirement401K = {
  /** The Plaid account ID associated with the account numbers */
  accountId: string;
  /** The plan number for the employer's 401k retirement plan */
  plan?: string;
  /** The full account number for the account */
  account?: string;
};

export const numbersRetirement401KSchema: Schema<NumbersRetirement401K> = s.object<NumbersRetirement401K>({
  accountId: s.string(),
  plan: s.optional(s.string()),
  account: s.optional(s.string()),
  _keysMap: {
    accountId: "account_id",
  },
});
