import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loanAccountSubtypeSchema, type LoanAccountSubtype } from "./loan-account-subtype.js";

/** A filter to apply to `loan`-type accounts */
export type LinkTokenCreateLoanFilter = {
  /**
   * An array of account subtypes to display in Link. If not specified, all account subtypes will be
   * shown. For a full list of valid types and subtypes, see the [Account
   * schema](https://plaid.com/docs/api/accounts#account-type-schema).
   */
  accountSubtypes?: LoanAccountSubtype[];
};

export const linkTokenCreateLoanFilterSchema: Schema<LinkTokenCreateLoanFilter> =
  s.object<LinkTokenCreateLoanFilter>({
    accountSubtypes: s.optional(s.array(s.lazy(() => loanAccountSubtypeSchema))),
    _keysMap: {
      accountSubtypes: "account_subtypes",
    },
  });
