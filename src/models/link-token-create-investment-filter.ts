import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  investmentAccountSubtypeSchema,
  type InvestmentAccountSubtype,
} from "./investment-account-subtype.js";

/**
 * A filter to apply to `investment`-type accounts (or `brokerage`-type accounts for API versions
 * 2018-05-22 and earlier).
 */
export type LinkTokenCreateInvestmentFilter = {
  /**
   * An array of account subtypes to display in Link. If not specified, all account subtypes will be
   * shown. For a full list of valid types and subtypes, see the [Account
   * schema](https://plaid.com/docs/api/accounts#account-type-schema).
   */
  accountSubtypes?: InvestmentAccountSubtype[];
};

export const linkTokenCreateInvestmentFilterSchema: Schema<LinkTokenCreateInvestmentFilter> =
  s.object<LinkTokenCreateInvestmentFilter>({
    accountSubtypes: s.optional(s.array(s.lazy(() => investmentAccountSubtypeSchema))),
    _keysMap: {
      accountSubtypes: "account_subtypes",
    },
  });
