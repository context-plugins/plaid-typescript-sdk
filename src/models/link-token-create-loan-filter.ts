import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loanAccountSubtypeSchema, type LoanAccountSubtype } from "./loan-account-subtype.js";

export type LinkTokenCreateLoanFilter = {
  accountSubtypes?: LoanAccountSubtype[];
};

export const linkTokenCreateLoanFilterSchema: Schema<LinkTokenCreateLoanFilter> =
  s.object<LinkTokenCreateLoanFilter>({
    accountSubtypes: s.optional(s.array(s.lazy(() => loanAccountSubtypeSchema))),
    _keysMap: {
      accountSubtypes: "account_subtypes",
    },
  });
