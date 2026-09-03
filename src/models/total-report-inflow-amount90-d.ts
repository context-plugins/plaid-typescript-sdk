import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TotalReportInflowAmount90D = {
  amount: number;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
};

export const totalReportInflowAmount90DSchema: Schema<TotalReportInflowAmount90D> =
  s.object<TotalReportInflowAmount90D>({
    amount: s.number(),
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
