import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TotalReportInflowAmount30D = {
  amount: number;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
};

export const totalReportInflowAmount30DSchema: Schema<TotalReportInflowAmount30D> =
  s.object<TotalReportInflowAmount30D>({
    amount: s.number(),
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
