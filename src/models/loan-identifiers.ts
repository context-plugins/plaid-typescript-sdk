import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loanIdentifierSchema, type LoanIdentifier } from "./loan-identifier.js";

export type LoanIdentifiers = {
  loanIdentifier: LoanIdentifier;
};

export const loanIdentifiersSchema: Schema<LoanIdentifiers> = s.object<LoanIdentifiers>({
  loanIdentifier: loanIdentifierSchema,
  _keysMap: {
    loanIdentifier: "LOAN_IDENTIFIER",
  },
});
