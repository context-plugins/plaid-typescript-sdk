import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FraudAmount = {
  isoCurrencyCode: "USD";
  value: number;
};

export const fraudAmountSchema: Schema<FraudAmount> = s.object<FraudAmount>({
  isoCurrencyCode: s.literal("USD"),
  value: s.number(),
  _keysMap: {
    isoCurrencyCode: "iso_currency_code",
  },
});
