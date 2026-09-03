import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersEft = {
  accountId: string;
  account: string;
  institution: string;
  branch: string;
};

export const numbersEftSchema: Schema<NumbersEft> = s.object<NumbersEft>({
  accountId: s.string(),
  account: s.string(),
  institution: s.string(),
  branch: s.string(),
  _keysMap: {
    accountId: "account_id",
  },
});
