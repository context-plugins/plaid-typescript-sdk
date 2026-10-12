import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An optional object for `/credit/bank_statements/uploads/get` request options. */
export type CreditBankStatementsUploadsGetRequestOptions = {
  /**
   * An array of `item_id`s whose bank statements information is returned. Each `item_id` should
   * uniquely identify a bank statements uploaded item. If this field is not provided, all
   * `item_id`s associated with the `user_token` will be returned in the response.
   */
  itemIds?: string[];
};

export const creditBankStatementsUploadsGetRequestOptionsSchema: Schema<CreditBankStatementsUploadsGetRequestOptions> =
  s.object<CreditBankStatementsUploadsGetRequestOptions>({
    itemIds: s.optional(s.array(s.string())),
    _keysMap: {
      itemIds: "item_ids",
    },
  });
