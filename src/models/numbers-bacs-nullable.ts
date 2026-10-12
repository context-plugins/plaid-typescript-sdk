import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Identifying information for transferring money to or from a UK bank account via Bacs. */
export type NumbersBacsNullable = {
  /** The Plaid account ID associated with the account numbers */
  accountId: string;
  /** The Bacs account number for the account */
  account: string;
  /** The Bacs sort code for the account */
  sortCode: string;
};

export const numbersBacsNullableSchema: Schema<NumbersBacsNullable> = s.object<NumbersBacsNullable>({
  accountId: s.string(),
  account: s.string(),
  sortCode: s.string(),
  _keysMap: {
    accountId: "account_id",
    sortCode: "sort_code",
  },
});
