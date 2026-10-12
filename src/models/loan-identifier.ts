import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loanIdentifierTypeSchema, type LoanIdentifierType } from "./loan-identifier-type.js";

/**
 * The information used to identify this loan by various parties to the transaction or other
 * organizations.
 */
export type LoanIdentifier = {
  /** The value of the identifier for the specified type. */
  loanIdentifier: string | null;
  /** A value from a MISMO prescribed list that specifies the type of loan identifier. */
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
