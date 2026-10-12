import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditAccountSubtypeSchema, type CreditAccountSubtype } from "./credit-account-subtype.js";

/** A filter to apply to `credit`-type accounts */
export type LinkTokenCreateCreditFilter = {
  /**
   * An array of account subtypes to display in Link. If not specified, all account subtypes will be
   * shown. For a full list of valid types and subtypes, see the [Account
   * schema](https://plaid.com/docs/api/accounts#account-type-schema).
   */
  accountSubtypes?: CreditAccountSubtype[];
};

export const linkTokenCreateCreditFilterSchema: Schema<LinkTokenCreateCreditFilter> =
  s.object<LinkTokenCreateCreditFilter>({
    accountSubtypes: s.optional(s.array(s.lazy(() => creditAccountSubtypeSchema))),
    _keysMap: {
      accountSubtypes: "account_subtypes",
    },
  });
