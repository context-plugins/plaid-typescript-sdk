import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";

/** A financial institution account. */
export type ConsentedAccount = {
  /**
   * Plaid's unique identifier for the account. Like all Plaid identifiers, the `account_id` is case
   * sensitive.
   */
  accountId?: string;
  /** The last 2-4 alphanumeric characters of an account's official account number */
  mask?: string;
  /** The name of the account, either assigned by the user or by the financial institution itself */
  name?: string;
  /** The official name of the account as given by the financial institution */
  officialName?: string;
  /**
   * `investment:` Investment account. In API versions 2018-05-22 and earlier, this type is called
   * `brokerage` instead.
   *
   * `credit:` Credit card
   *
   * `depository:` Depository account
   *
   * `loan:` Loan account
   *
   * `other:` Non-specified account type
   *
   * See the [Account type schema](https://plaid.com/docs/api/accounts#account-type-schema) for a
   * full listing of account types and corresponding subtypes.
   */
  type?: AccountType;
  /**
   * See the [Account type schema](https://plaid.com/docs/api/accounts/#account-type-schema) for a
   * full listing of account types and corresponding subtypes.
   */
  subtype?: AccountSubtype | null;
};

export const consentedAccountSchema: Schema<ConsentedAccount> = s.object<ConsentedAccount>({
  accountId: s.optional(s.string()),
  mask: s.optional(s.string()),
  name: s.optional(s.string()),
  officialName: s.optional(s.string()),
  type: s.optional(s.lazy(() => accountTypeSchema)),
  subtype: s.optionalNullable(s.lazy(() => accountSubtypeSchema)),
  _keysMap: {
    accountId: "account_id",
    officialName: "official_name",
  },
});
