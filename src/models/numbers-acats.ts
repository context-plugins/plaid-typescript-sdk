import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersAcats = {
  accountId: string;
  account: string;
  dtcNumbers: string[];
};

export const numbersAcatsSchema: Schema<NumbersAcats> = s.object<NumbersAcats>({
  accountId: s.string(),
  account: s.string(),
  dtcNumbers: s.array(s.string()),
  _keysMap: {
    accountId: "account_id",
    dtcNumbers: "dtc_numbers",
  },
});
