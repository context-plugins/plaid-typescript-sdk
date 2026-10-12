import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Identifying information for transferring money to or from a Canadian bank account via EFT. */
export type NumbersEftNullable = {
  /** The Plaid account ID associated with the account numbers */
  accountId: string;
  /** The EFT account number for the account */
  account: string;
  /** The EFT institution number for the account */
  institution: string;
  /** The EFT branch number for the account */
  branch: string;
};

export const numbersEftNullableSchema: Schema<NumbersEftNullable> = s.object<NumbersEftNullable>({
  accountId: s.string(),
  account: s.string(),
  institution: s.string(),
  branch: s.string(),
  _keysMap: {
    accountId: "account_id",
  },
});
