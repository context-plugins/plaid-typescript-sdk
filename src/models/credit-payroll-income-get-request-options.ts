import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditPayrollIncomeGetRequestOptions = {
  itemIds?: string[];
};

export const creditPayrollIncomeGetRequestOptionsSchema: Schema<CreditPayrollIncomeGetRequestOptions> =
  s.object<CreditPayrollIncomeGetRequestOptions>({
    itemIds: s.optional(s.array(s.string())),
    _keysMap: {
      itemIds: "item_ids",
    },
  });
