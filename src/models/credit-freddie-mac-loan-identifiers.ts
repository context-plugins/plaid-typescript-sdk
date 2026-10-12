import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loanIdentifierSchema, type LoanIdentifier } from "./loan-identifier.js";

/** Collection of current and previous identifiers for this loan. */
export type CreditFreddieMacLoanIdentifiers = {
  loanIdentifier: LoanIdentifier[];
};

export const creditFreddieMacLoanIdentifiersSchema: Schema<CreditFreddieMacLoanIdentifiers> =
  s.object<CreditFreddieMacLoanIdentifiers>({
    loanIdentifier: s.array(s.lazy(() => loanIdentifierSchema)),
    _keysMap: {
      loanIdentifier: "LOAN_IDENTIFIER",
    },
  });
