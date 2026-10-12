import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Specifies options for initializing Link for use with Bank Income. This field is required if
 * `income_verification` is included in the `products` array and `bank` is specified in
 * `income_source_types`.
 */
export type LinkTokenCreateRequestIncomeVerificationBankIncome = {
  /** The number of days of data to request for the Bank Income product */
  daysRequested: number;
  /**
   * Whether to enable multiple Items to be added in the Link session. This setting is deprecated
   * and has been replaced by the more general `enable_multi_item_link` setting, which supports all
   * products.
   *
   * @deprecated
   *
   * @default false
   */
  enableMultipleItems?: boolean | null;
};

export const linkTokenCreateRequestIncomeVerificationBankIncomeSchema: Schema<LinkTokenCreateRequestIncomeVerificationBankIncome> =
  s.object<LinkTokenCreateRequestIncomeVerificationBankIncome>({
    daysRequested: s.int(),
    enableMultipleItems: s.defaulted(s.nullable(s.boolean()), false),
    _keysMap: {
      daysRequested: "days_requested",
      enableMultipleItems: "enable_multiple_items",
    },
  });
