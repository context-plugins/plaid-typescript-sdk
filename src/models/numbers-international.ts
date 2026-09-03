import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersInternational = {
  accountId: string;
  iban: string;
  bic: string;
};

export const numbersInternationalSchema: Schema<NumbersInternational> = s.object<NumbersInternational>({
  accountId: s.string(),
  iban: s.string(),
  bic: s.string(),
  _keysMap: {
    accountId: "account_id",
  },
});
