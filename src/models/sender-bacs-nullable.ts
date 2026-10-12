import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An object containing a Bacs account number and sort code. If an IBAN is not provided or if this
 * recipient needs to accept domestic GBP-denominated payments, Bacs data is required.
 */
export type SenderBacsNullable = {
  /** The account number of the account. Maximum of 10 characters. */
  account?: string;
  /** The 6-character sort code of the account. */
  sortCode?: string;
};

export const senderBacsNullableSchema: Schema<SenderBacsNullable> = s.object<SenderBacsNullable>({
  account: s.optional(s.string()),
  sortCode: s.optional(s.string()),
  _keysMap: {
    sortCode: "sort_code",
  },
});
