import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Identifying information for transferring money to or from an international bank account via wire
 * transfer.
 */
export type NumbersInternational = {
  /** The Plaid account ID associated with the account numbers */
  accountId: string;
  /** The International Bank Account Number (IBAN) for the account */
  iban: string;
  /** The Business Identifier Code (BIC) for the account */
  bic: string;
};

export const numbersInternationalSchema: Schema<NumbersInternational> = s.object<NumbersInternational>({
  accountId: s.string(),
  iban: s.string(),
  bic: s.string(),
  _keysMap: {
    accountId: "account_id",
  },
});
