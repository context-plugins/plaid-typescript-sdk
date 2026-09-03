import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersAton = {
  accountId: string;
  account: string;
};

export const numbersAtonSchema: Schema<NumbersAton> = s.object<NumbersAton>({
  accountId: s.string(),
  account: s.string(),
  _keysMap: {
    accountId: "account_id",
  },
});
