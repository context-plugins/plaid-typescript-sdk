import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An optional object for `/credit/payroll_income/get` request options. */
export type CreditPayrollIncomeGetRequestOptions = {
  /**
   * An array of `item_id`s whose payroll information is returned. Each `item_id` should uniquely
   * identify a payroll income item. If this field is not provided, all `item_id`s associated with
   * the `user_token` will be returned in the response.
   */
  itemIds?: string[];
};

export const creditPayrollIncomeGetRequestOptionsSchema: Schema<CreditPayrollIncomeGetRequestOptions> =
  s.object<CreditPayrollIncomeGetRequestOptions>({
    itemIds: s.optional(s.array(s.string())),
    _keysMap: {
      itemIds: "item_ids",
    },
  });
