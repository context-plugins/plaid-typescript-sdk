import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditSessionItemAddResult = {
  publicToken?: string;
  itemId?: string;
  institutionId?: string;
};

export const creditSessionItemAddResultSchema: Schema<CreditSessionItemAddResult> =
  s.object<CreditSessionItemAddResult>({
    publicToken: s.optional(s.string()),
    itemId: s.optional(s.string()),
    institutionId: s.optional(s.string()),
    _keysMap: {
      publicToken: "public_token",
      itemId: "item_id",
      institutionId: "institution_id",
    },
  });
