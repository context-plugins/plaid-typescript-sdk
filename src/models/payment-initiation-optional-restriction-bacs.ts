import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An optional object used to restrict the accounts used for payments. If provided, the end user
 * will be able to send payments only from the specified bank account.
 */
export type PaymentInitiationOptionalRestrictionBacs = {
  /** The account number of the account. Maximum of 10 characters. */
  account?: string;
  /** The 6-character sort code of the account. */
  sortCode?: string;
};

export const paymentInitiationOptionalRestrictionBacsSchema: Schema<PaymentInitiationOptionalRestrictionBacs> =
  s.object<PaymentInitiationOptionalRestrictionBacs>({
    account: s.optional(s.string()),
    sortCode: s.optional(s.string()),
    _keysMap: {
      sortCode: "sort_code",
    },
  });
