import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RecipientBacs = {
  account?: string;
  sortCode?: string;
};

export const recipientBacsSchema: Schema<RecipientBacs> = s.object<RecipientBacs>({
  account: s.optional(s.string()),
  sortCode: s.optional(s.string()),
  _keysMap: {
    sortCode: "sort_code",
  },
});
