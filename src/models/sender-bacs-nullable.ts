import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SenderBacsNullable = {
  account?: string;
  sortCode?: string;
};

export const senderBacsNullableSchema: Schema<SenderBacsNullable> = s.object<SenderBacsNullable>({
  account: s.optional(s.string()),
  sortCode: s.optional(s.string()),
  _keysMap: {
    sortCode: "sort_code",
  },
});
