import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information on the ownership of an investment account */
export type InvestmentsAuthOwner = {
  /** The ID of the account that this identity information pertains to */
  accountId?: string;
  /**
   * A list of names associated with the account by the financial institution. In the case of a
   * joint account, Plaid will make a best effort to report the names of all account holders.
   *
   * If an Item contains multiple accounts with different owner names, some institutions will report
   * all names associated with the Item in each account's `names` array.
   */
  names?: string[];
};

export const investmentsAuthOwnerSchema: Schema<InvestmentsAuthOwner> = s.object<InvestmentsAuthOwner>({
  accountId: s.optional(s.string()),
  names: s.optional(s.array(s.string())),
  _keysMap: {
    accountId: "account_id",
  },
});
