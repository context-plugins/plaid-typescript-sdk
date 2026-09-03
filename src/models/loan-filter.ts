import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loanAccountSubtypeSchema, type LoanAccountSubtype } from "./loan-account-subtype.js";

export type LoanFilter = {
  accountSubtypes: LoanAccountSubtype[];
};

export const loanFilterSchema: Schema<LoanFilter> = s.object<LoanFilter>({
  accountSubtypes: s.array(s.lazy(() => loanAccountSubtypeSchema)),
  _keysMap: {
    accountSubtypes: "account_subtypes",
  },
});
