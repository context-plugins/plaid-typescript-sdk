import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TotalReportOutflowAmount30D = {
  amount: number;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
};

export const totalReportOutflowAmount30DSchema: Schema<TotalReportOutflowAmount30D> =
  s.object<TotalReportOutflowAmount30D>({
    amount: s.number(),
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
