import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersEftNullable = {
  accountId: string;
  account: string;
  institution: string;
  branch: string;
};

export const numbersEftNullableSchema: Schema<NumbersEftNullable> = s.object<NumbersEftNullable>({
  accountId: s.string(),
  account: s.string(),
  institution: s.string(),
  branch: s.string(),
  _keysMap: {
    accountId: "account_id",
  },
});
