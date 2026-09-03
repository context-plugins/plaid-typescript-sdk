import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersInternationalNullable = {
  accountId: string;
  iban: string;
  bic: string;
};

export const numbersInternationalNullableSchema: Schema<NumbersInternationalNullable> =
  s.object<NumbersInternationalNullable>({
    accountId: s.string(),
    iban: s.string(),
    bic: s.string(),
    _keysMap: {
      accountId: "account_id",
    },
  });
