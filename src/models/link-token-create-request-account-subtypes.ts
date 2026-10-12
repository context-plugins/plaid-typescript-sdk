import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkTokenCreateCreditFilterSchema,
  type LinkTokenCreateCreditFilter,
} from "./link-token-create-credit-filter.js";
import {
  linkTokenCreateDepositoryFilterSchema,
  type LinkTokenCreateDepositoryFilter,
} from "./link-token-create-depository-filter.js";
import {
  linkTokenCreateInvestmentFilterSchema,
  type LinkTokenCreateInvestmentFilter,
} from "./link-token-create-investment-filter.js";
import {
  linkTokenCreateLoanFilterSchema,
  type LinkTokenCreateLoanFilter,
} from "./link-token-create-loan-filter.js";

/**
 * By default, Link will only display account types that are compatible with all products supplied
 * in the `products` parameter of `/link/token/create`. You can further limit the accounts shown in
 * Link by using `account_filters` to specify the account subtypes to be shown in Link. Only the
 * specified subtypes will be shown. This filtering applies to both the Account Select view (if
 * enabled) and the Institution Select view. Institutions that do not support the selected subtypes
 * will be omitted from Link. To indicate that all subtypes should be shown, use the value `"all"`.
 * If the `account_filters` filter is used, any account type for which a filter is not specified
 * will be entirely omitted from Link.
 *
 * For a full list of valid types and subtypes, see the [Account
 * schema](https://plaid.com/docs/api/accounts#account-type-schema).
 *
 * For institutions using OAuth, the filter will not affect the list of institutions or accounts
 * shown by the bank in the OAuth window.
 */
export type LinkTokenCreateRequestAccountSubtypes = {
  /** A filter to apply to `depository`-type accounts */
  depository?: LinkTokenCreateDepositoryFilter;
  /** A filter to apply to `credit`-type accounts */
  credit?: LinkTokenCreateCreditFilter;
  /** A filter to apply to `loan`-type accounts */
  loan?: LinkTokenCreateLoanFilter;
  /**
   * A filter to apply to `investment`-type accounts (or `brokerage`-type accounts for API versions
   * 2018-05-22 and earlier).
   */
  investment?: LinkTokenCreateInvestmentFilter;
};

export const linkTokenCreateRequestAccountSubtypesSchema: Schema<LinkTokenCreateRequestAccountSubtypes> =
  s.object<LinkTokenCreateRequestAccountSubtypes>({
    depository: s.optional(s.lazy(() => linkTokenCreateDepositoryFilterSchema)),
    credit: s.optional(s.lazy(() => linkTokenCreateCreditFilterSchema)),
    loan: s.optional(s.lazy(() => linkTokenCreateLoanFilterSchema)),
    investment: s.optional(s.lazy(() => linkTokenCreateInvestmentFilterSchema)),
  });
