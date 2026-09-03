import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditPayrollIncomeRefreshRequestOptions = {
  itemIds?: string[];
  webhook?: string;
};

export const creditPayrollIncomeRefreshRequestOptionsSchema: Schema<CreditPayrollIncomeRefreshRequestOptions> =
  s.object<CreditPayrollIncomeRefreshRequestOptions>({
    itemIds: s.optional(s.array(s.string())),
    webhook: s.optional(s.string()),
    _keysMap: {
      itemIds: "item_ids",
    },
  });
