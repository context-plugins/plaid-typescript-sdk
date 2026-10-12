import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loanIdentifierSchema, type LoanIdentifier } from "./loan-identifier.js";

/** Collection of current and previous identifiers for this loan. */
export type LoanIdentifiers = {
  /**
   * The information used to identify this loan by various parties to the transaction or other
   * organizations.
   */
  loanIdentifier: LoanIdentifier;
};

export const loanIdentifiersSchema: Schema<LoanIdentifiers> = s.object<LoanIdentifiers>({
  loanIdentifier: loanIdentifierSchema,
  _keysMap: {
    loanIdentifier: "LOAN_IDENTIFIER",
  },
});
