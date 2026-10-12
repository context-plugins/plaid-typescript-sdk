import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Account numbers using the International Bank Account Number and BIC/SWIFT code format. */
export type CounterpartyNumbersInternational = {
  /** International Bank Account Number (IBAN). */
  iban?: string | null;
  /** Business Identifier Code (BIC) for this counterparty. */
  bic?: string | null;
};

export const counterpartyNumbersInternationalSchema: Schema<CounterpartyNumbersInternational> =
  s.object<CounterpartyNumbersInternational>({
    iban: s.optionalNullable(s.string()),
    bic: s.optionalNullable(s.string()),
  });
