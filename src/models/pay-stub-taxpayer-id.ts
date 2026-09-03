import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayStubTaxpayerId = {
  idType: string | null;
  idMask: string | null;
};

export const payStubTaxpayerIdSchema: Schema<PayStubTaxpayerId> = s.object<PayStubTaxpayerId>({
  idType: s.nullable(s.string()),
  idMask: s.nullable(s.string()),
  _keysMap: {
    idType: "id_type",
    idMask: "id_mask",
  },
});
