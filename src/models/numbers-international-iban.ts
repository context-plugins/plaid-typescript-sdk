import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersInternationalIban = {
  iban: string;
  bic: string;
};

export const numbersInternationalIbanSchema: Schema<NumbersInternationalIban> =
  s.object<NumbersInternationalIban>({
    iban: s.string(),
    bic: s.string(),
  });
