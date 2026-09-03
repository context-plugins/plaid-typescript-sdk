import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraVoaReportAccountHistoricalBalance = {
  current: number;
  date: string;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
};

export const craVoaReportAccountHistoricalBalanceSchema: Schema<CraVoaReportAccountHistoricalBalance> =
  s.object<CraVoaReportAccountHistoricalBalance>({
    current: s.number(),
    date: s.dateOnly(),
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
