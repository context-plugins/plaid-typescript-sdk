import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statementsStatementSchema, type StatementsStatement } from "./statements-statement.js";

/** Account associated with the Item. */
export type StatementsAccount = {
  /** Plaid's unique identifier for the account. */
  accountId: string;
  /**
   * The last 2-4 alphanumeric characters of an account's official account number. Note that the
   * mask may be non-unique between an Item's accounts, and it may also not match the mask that the
   * bank displays to the user.
   */
  accountMask: string;
  /**
   * The name of the account, either assigned by the user or by the financial institution itself.
   */
  accountName: string;
  /** The official name of the account as given by the financial institution. */
  accountOfficialName: string;
  /**
   * The subtype of the account. For a full list of valid types and subtypes, see the [Account
   * schema](https://plaid.com/docs/api/accounts#account-type-schema).
   */
  accountSubtype: string;
  /**
   * The type of account. For a full list of valid types and subtypes, see the [Account
   * schema](https://plaid.com/docs/api/accounts#account-type-schema).
   */
  accountType: string;
  /** The list of statements' metadata associated with this account. */
  statements: StatementsStatement[];
};

export const statementsAccountSchema: Schema<StatementsAccount> = s.object<StatementsAccount>({
  accountId: s.string(),
  accountMask: s.string(),
  accountName: s.string(),
  accountOfficialName: s.string(),
  accountSubtype: s.string(),
  accountType: s.string(),
  statements: s.array(s.lazy(() => statementsStatementSchema)),
  _keysMap: {
    accountId: "account_id",
    accountMask: "account_mask",
    accountName: "account_name",
    accountOfficialName: "account_official_name",
    accountSubtype: "account_subtype",
    accountType: "account_type",
  },
});
