import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditFreddieMacLoanIdentifiersSchema,
  type CreditFreddieMacLoanIdentifiers,
} from "./credit-freddie-mac-loan-identifiers.js";

/**
 * Information specific to a mortgage loan agreement between one or more borrowers and a mortgage
 * lender.
 */
export type CreditFreddieMacLoan = {
  /** Collection of current and previous identifiers for this loan. */
  loanIdentifiers: CreditFreddieMacLoanIdentifiers;
  /** Type of loan. The value can only be "SubjectLoan". */
  loanRoleType: string;
};

export const creditFreddieMacLoanSchema: Schema<CreditFreddieMacLoan> = s.object<CreditFreddieMacLoan>({
  loanIdentifiers: creditFreddieMacLoanIdentifiersSchema,
  loanRoleType: s.string(),
  _keysMap: {
    loanIdentifiers: "LOAN_IDENTIFIERS",
    loanRoleType: "LoanRoleType",
  },
});
