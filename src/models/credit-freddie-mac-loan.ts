import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditFreddieMacLoanIdentifiersSchema,
  type CreditFreddieMacLoanIdentifiers,
} from "./credit-freddie-mac-loan-identifiers.js";

export type CreditFreddieMacLoan = {
  loanIdentifiers: CreditFreddieMacLoanIdentifiers;
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
