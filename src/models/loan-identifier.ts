import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loanIdentifierTypeSchema, type LoanIdentifierType } from "./loan-identifier-type.js";

export type LoanIdentifier = {
  loanIdentifier: string | null;
  loanIdentifierType: LoanIdentifierType | null;
};

export const loanIdentifierSchema: Schema<LoanIdentifier> = s.object<LoanIdentifier>({
  loanIdentifier: s.nullable(s.string()),
  loanIdentifierType: s.nullable(s.lazy(() => loanIdentifierTypeSchema)),
  _keysMap: {
    loanIdentifier: "LoanIdentifier",
    loanIdentifierType: "LoanIdentifierType",
  },
});
