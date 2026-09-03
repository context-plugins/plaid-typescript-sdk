import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssetReportAccountBalance = {
  available: number | null;
  current: number | null;
  limit: number | null;
  marginLoanAmount: number | null;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
  lastUpdatedDatetime?: Date | null;
};

export const assetReportAccountBalanceSchema: Schema<AssetReportAccountBalance> =
  s.object<AssetReportAccountBalance>({
    available: s.nullable(s.number()),
    current: s.nullable(s.number()),
    limit: s.nullable(s.number()),
    marginLoanAmount: s.nullable(s.number()),
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    lastUpdatedDatetime: s.optionalNullable(s.dateTime()),
    _keysMap: {
      marginLoanAmount: "margin_loan_amount",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
      lastUpdatedDatetime: "last_updated_datetime",
    },
  });
