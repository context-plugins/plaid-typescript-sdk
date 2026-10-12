import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { isoCurrencyCode1Schema, type IsoCurrencyCode1 } from "./iso-currency-code1.js";

/**
 * The amount and currency of the fraud or attempted fraud. `fraud_amount` should be omitted to
 * indicate an unknown fraud amount.
 */
export type FraudAmount = {
  /** An ISO-4217 currency code. */
  isoCurrencyCode: IsoCurrencyCode1;
  /**
   * The amount value. This value can be 0 to indicate no money was lost. Must not contain more than
   * two digits of precision (e.g., `1.23`).
   */
  value: number;
};

export const fraudAmountSchema: Schema<FraudAmount> = s.object<FraudAmount>({
  isoCurrencyCode: isoCurrencyCode1Schema,
  value: s.float64(),
  _keysMap: {
    isoCurrencyCode: "iso_currency_code",
  },
});
