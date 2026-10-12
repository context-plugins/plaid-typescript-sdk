import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Specifies options for initializing Link for use with Bank Employment. This field is required if
 * `employment` is included in the `products` array and `bank` is specified in
 * `employment_source_types`.
 */
export type LinkTokenCreateRequestEmploymentBankIncome = {
  /** The number of days of data to request for the Bank Employment product. */
  daysRequested: number;
};

export const linkTokenCreateRequestEmploymentBankIncomeSchema: Schema<LinkTokenCreateRequestEmploymentBankIncome> =
  s.object<LinkTokenCreateRequestEmploymentBankIncome>({
    daysRequested: s.int(),
    _keysMap: {
      daysRequested: "days_requested",
    },
  });
