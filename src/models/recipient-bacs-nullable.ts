import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RecipientBacsNullable = {
  account?: string;
  sortCode?: string;
};

export const recipientBacsNullableSchema: Schema<RecipientBacsNullable> = s.object<RecipientBacsNullable>({
  account: s.optional(s.string()),
  sortCode: s.optional(s.string()),
  _keysMap: {
    sortCode: "sort_code",
  },
});
