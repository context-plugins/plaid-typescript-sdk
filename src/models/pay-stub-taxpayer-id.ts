import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Taxpayer ID of the individual receiving the paystub. */
export type PayStubTaxpayerId = {
  /** Type of ID, e.g. 'SSN'. */
  idType: string | null;
  /** ID mask; i.e. last 4 digits of the taxpayer ID. */
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
