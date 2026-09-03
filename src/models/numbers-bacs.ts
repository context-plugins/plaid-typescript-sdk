import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersBacs = {
  accountId: string;
  account: string;
  sortCode: string;
};

export const numbersBacsSchema: Schema<NumbersBacs> = s.object<NumbersBacs>({
  accountId: s.string(),
  account: s.string(),
  sortCode: s.string(),
  _keysMap: {
    accountId: "account_id",
    sortCode: "sort_code",
  },
});
