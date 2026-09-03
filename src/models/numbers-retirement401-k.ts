import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersRetirement401K = {
  accountId: string;
  plan?: string;
  account?: string;
};

export const numbersRetirement401KSchema: Schema<NumbersRetirement401K> = s.object<NumbersRetirement401K>({
  accountId: s.string(),
  plan: s.optional(s.string()),
  account: s.optional(s.string()),
  _keysMap: {
    accountId: "account_id",
  },
});
