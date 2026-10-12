import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Taxpayer ID of the individual receiving the paystub. */
export type TaxpayerId = {
  /** Type of ID, e.g. 'SSN' */
  idType?: string | null;
  /** ID mask; i.e. last 4 digits of the taxpayer ID */
  idMask?: string | null;
  /**
   * Last 4 digits of unique number of ID.
   *
   * @deprecated
   */
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
