import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TotalInflowAmount90D = {
  amount: number;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
};

export const totalInflowAmount90DSchema: Schema<TotalInflowAmount90D> = s.object<TotalInflowAmount90D>({
  amount: s.number(),
  isoCurrencyCode: s.nullable(s.string()),
  unofficialCurrencyCode: s.nullable(s.string()),
  _keysMap: {
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
  },
});
