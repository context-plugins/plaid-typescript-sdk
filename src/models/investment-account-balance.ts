import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvestmentAccountBalance = {
  available: number | null;
  current: number | null;
  limit: number | null;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
  lastUpdatedDatetime?: Date | null;
  marginLoanAmount: number | null;
};

export const investmentAccountBalanceSchema: Schema<InvestmentAccountBalance> =
  s.object<InvestmentAccountBalance>({
    available: s.nullable(s.number()),
    current: s.nullable(s.number()),
    limit: s.nullable(s.number()),
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    lastUpdatedDatetime: s.optionalNullable(s.dateTime()),
    marginLoanAmount: s.nullable(s.number()),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
      lastUpdatedDatetime: "last_updated_datetime",
      marginLoanAmount: "margin_loan_amount",
    },
  });
