import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsItemAccountMetadataSchema,
  type CraPartnerInsightsItemAccountMetadata,
} from "./cra-partner-insights-item-account-metadata.js";
import {
  creditBankIncomeAccountTypeSchema,
  type CreditBankIncomeAccountType,
} from "./credit-bank-income-account-type.js";
import {
  depositoryAccountSubtypeSchema,
  type DepositoryAccountSubtype,
} from "./depository-account-subtype.js";
import { ownerSchema, type Owner } from "./owner.js";

/** Account data corresponding to the Item from which Partner Insights were generated. */
export type CraPartnerInsightsItemAccount = {
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
  accountId?: string;
  /**
   * The last 2-4 alphanumeric characters of an account's official account number. Note that the
   * mask may be non-unique between an Item's accounts, and it may also not match the mask that the
   * bank displays to the user.
   */
  mask: string | null;
  /** An object containing metadata about the extracted account. */
  metadata: CraPartnerInsightsItemAccountMetadata;
  /** The name of the account */
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

export const craPartnerInsightsItemAccountSchema: Schema<CraPartnerInsightsItemAccount> =
  s.object<CraPartnerInsightsItemAccount>({
    accountId: s.optional(s.string()),
    mask: s.nullable(s.string()),
    metadata: craPartnerInsightsItemAccountMetadataSchema,
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
