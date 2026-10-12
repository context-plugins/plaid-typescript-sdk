import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An optional object for `/credit/payroll_income/refresh` request options. */
export type CreditPayrollIncomeRefreshRequestOptions = {
  /**
   * An array of `item_id`s to be refreshed. Each `item_id` should uniquely identify a payroll
   * income item. If this field is not provided, all `item_id`s associated with the `user_token`
   * will be refreshed.
   */
  itemIds?: string[];
  /** The URL where Plaid will send the payroll income refresh webhook. */
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
