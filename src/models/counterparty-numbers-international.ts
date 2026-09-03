import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CounterpartyNumbersInternational = {
  iban?: string | null;
  bic?: string | null;
};

export const counterpartyNumbersInternationalSchema: Schema<CounterpartyNumbersInternational> =
  s.object<CounterpartyNumbersInternational>({
    iban: s.optionalNullable(s.string()),
    bic: s.optionalNullable(s.string()),
  });
