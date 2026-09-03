import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditFreddieMacLoanSchema, type CreditFreddieMacLoan } from "./credit-freddie-mac-loan.js";

export type CreditFreddieMacLoans = {
  loan: CreditFreddieMacLoan;
};

export const creditFreddieMacLoansSchema: Schema<CreditFreddieMacLoans> = s.object<CreditFreddieMacLoans>({
  loan: creditFreddieMacLoanSchema,
  _keysMap: {
    loan: "LOAN",
  },
});
