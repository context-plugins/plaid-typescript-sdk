import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditBankStatementsUploadsGetRequestOptions = {
  itemIds?: string[];
};

export const creditBankStatementsUploadsGetRequestOptionsSchema: Schema<CreditBankStatementsUploadsGetRequestOptions> =
  s.object<CreditBankStatementsUploadsGetRequestOptions>({
    itemIds: s.optional(s.array(s.string())),
    _keysMap: {
      itemIds: "item_ids",
    },
  });
