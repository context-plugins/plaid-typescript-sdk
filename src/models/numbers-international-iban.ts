import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Account numbers using the International Bank Account Number and BIC/SWIFT code format. */
export type NumbersInternationalIban = {
  /** International Bank Account Number (IBAN). */
  iban: string;
  /** The Business Identifier Code, also known as SWIFT code, for this bank account. */
  bic: string;
};

export const numbersInternationalIbanSchema: Schema<NumbersInternationalIban> =
  s.object<NumbersInternationalIban>({
    iban: s.string(),
    bic: s.string(),
  });
