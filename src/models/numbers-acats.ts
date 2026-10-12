import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Identifying information for transferring holdings to an investment account via ACATS. */
export type NumbersAcats = {
  /** The Plaid account ID associated with the account numbers */
  accountId: string;
  /** The full account number for the account */
  account: string;
  /**
   * Identifiers for the clearinghouses that are associated with the account in order of relevance.
   * If this array is empty, call `/institutions/get_by_id` with the `item.institution_id` to get
   * the DTC number.
   */
  dtcNumbers: string[];
};

export const numbersAcatsSchema: Schema<NumbersAcats> = s.object<NumbersAcats>({
  accountId: s.string(),
  account: s.string(),
  dtcNumbers: s.array(s.string()),
  _keysMap: {
    accountId: "account_id",
    dtcNumbers: "dtc_numbers",
  },
});
