import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersBacsNullable = {
  accountId: string;
  account: string;
  sortCode: string;
};

export const numbersBacsNullableSchema: Schema<NumbersBacsNullable> = s.object<NumbersBacsNullable>({
  accountId: s.string(),
  account: s.string(),
  sortCode: s.string(),
  _keysMap: {
    accountId: "account_id",
    sortCode: "sort_code",
  },
});
