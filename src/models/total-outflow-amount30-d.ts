import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TotalOutflowAmount30D = {
  amount: number;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
};

export const totalOutflowAmount30DSchema: Schema<TotalOutflowAmount30D> = s.object<TotalOutflowAmount30D>({
  amount: s.number(),
  isoCurrencyCode: s.nullable(s.string()),
  unofficialCurrencyCode: s.nullable(s.string()),
  _keysMap: {
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
  },
});
