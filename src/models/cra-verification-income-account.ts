import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import {
  craBankIncomeAccountMetadataSchema,
  type CraBankIncomeAccountMetadata,
} from "./cra-bank-income-account-metadata.js";

/** Account information within the Home Lending Income Report. */
export type CraVerificationIncomeAccount = {
  /**
   * Plaid's unique identifier for the account. This value will not change unless Plaid can't
   * reconcile the account with the data returned by the financial institution. This may occur, for
   * example, when the name of the account changes. If this happens a new `account_id` will be
   * assigned to the account.
   *
   * If an account with a specific `account_id` disappears instead of changing, the account is
   * likely closed. Closed accounts are not returned by the Plaid API.
   *
   * Like all Plaid identifiers, the `account_id` is case sensitive.
   */
  accountId: string;
  /**
   * The last 2-4 alphanumeric characters of an account's official account number. Note that the
   * mask may be non-unique between an Item's accounts, and it may also not match the mask that the
   * bank displays to the user.
   */
  mask: string | null;
  /** An object containing metadata about the extracted account. */
  metadata: CraBankIncomeAccountMetadata;
  /**
   * The name of the account, either assigned by the user or by the financial institution itself.
   */
  name: string;
  /** The official name of the account as given by the financial institution. */
  officialName: string | null;
  /**
   * See the [Account type schema](https://plaid.com/docs/api/accounts/#account-type-schema) for a
   * full listing of account types and corresponding subtypes.
   */
  subtype: AccountSubtype | null;
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
  type: AccountType;
};

export const craVerificationIncomeAccountSchema: Schema<CraVerificationIncomeAccount> =
  s.object<CraVerificationIncomeAccount>({
    accountId: s.string(),
    mask: s.nullable(s.string()),
    metadata: craBankIncomeAccountMetadataSchema,
    name: s.string(),
    officialName: s.nullable(s.string()),
    subtype: s.nullable(s.lazy(() => accountSubtypeSchema)),
    type: accountTypeSchema,
    _keysMap: {
      accountId: "account_id",
      officialName: "official_name",
    },
  });
