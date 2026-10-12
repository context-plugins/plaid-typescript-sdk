import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankIncomeAccountTypeSchema,
  type CreditBankIncomeAccountType,
} from "./credit-bank-income-account-type.js";
import {
  depositoryAccountSubtypeSchema,
  type DepositoryAccountSubtype,
} from "./depository-account-subtype.js";
import { ownerSchema, type Owner } from "./owner.js";

/** The Item's bank accounts that have the selected data. */
export type CreditBankIncomeAccount = {
  /** Plaid's unique identifier for the account. */
  accountId: string;
  /**
   * The last 2-4 alphanumeric characters of an account's official account number. Note that the
   * mask may be non-unique between an Item's accounts, and it may also not match the mask that the
   * bank displays to the user.
   */
  mask: string | null;
  /** The name of the bank account. */
  name: string;
  /** The official name of the bank account. */
  officialName: string | null;
  /**
   * Valid account subtypes for depository accounts. For a list containing descriptions of each
   * subtype, see [Account
   * schemas](https://plaid.com/docs/api/accounts/#StandaloneAccountType-depository).
   */
  subtype: DepositoryAccountSubtype;
  /** The account type. This will always be `depository`. */
  type: CreditBankIncomeAccountType;
  /**
   * Data returned by the financial institution about the account owner or owners. Identity
   * information is optional, so field may return an empty array.
   */
  owners: Owner[];
};

export const creditBankIncomeAccountSchema: Schema<CreditBankIncomeAccount> =
  s.object<CreditBankIncomeAccount>({
    accountId: s.string(),
    mask: s.nullable(s.string()),
    name: s.string(),
    officialName: s.nullable(s.string()),
    subtype: depositoryAccountSubtypeSchema,
    type: creditBankIncomeAccountTypeSchema,
    owners: s.array(s.lazy(() => ownerSchema)),
    _keysMap: {
      accountId: "account_id",
      officialName: "official_name",
    },
  });
