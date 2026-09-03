import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditAccountSubtypeSchema, type CreditAccountSubtype } from "./credit-account-subtype.js";

export type LinkTokenCreateCreditFilter = {
  accountSubtypes?: CreditAccountSubtype[];
};

export const linkTokenCreateCreditFilterSchema: Schema<LinkTokenCreateCreditFilter> =
  s.object<LinkTokenCreateCreditFilter>({
    accountSubtypes: s.optional(s.array(s.lazy(() => creditAccountSubtypeSchema))),
    _keysMap: {
      accountSubtypes: "account_subtypes",
    },
  });
