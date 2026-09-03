import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaystubOverrideTaxpayerId = {
  idType?: string | null;
  idMask?: string | null;
};

export const paystubOverrideTaxpayerIdSchema: Schema<PaystubOverrideTaxpayerId> =
  s.object<PaystubOverrideTaxpayerId>({
    idType: s.optionalNullable(s.string()),
    idMask: s.optionalNullable(s.string()),
    _keysMap: {
      idType: "id_type",
      idMask: "id_mask",
    },
  });
