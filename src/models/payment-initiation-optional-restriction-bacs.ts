import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInitiationOptionalRestrictionBacs = {
  account?: string;
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
