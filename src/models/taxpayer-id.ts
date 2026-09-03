import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaxpayerId = {
  idType?: string | null;
  idMask?: string | null;
  last4Digits?: string | null;
};

export const taxpayerIdSchema: Schema<TaxpayerId> = s.object<TaxpayerId>({
  idType: s.optionalNullable(s.string()),
  idMask: s.optionalNullable(s.string()),
  last4Digits: s.optionalNullable(s.string()),
  _keysMap: {
    idType: "id_type",
    idMask: "id_mask",
    last4Digits: "last_4_digits",
  },
});
