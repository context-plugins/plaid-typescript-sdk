import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BaseReportInvestmentHolding = {
  accountId: string;
  securityId: string;
  institutionPrice: number;
  institutionPriceAsOf?: string | null;
  institutionValue: number;
  costBasis: number | null;
  quantity: number;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
};

export const baseReportInvestmentHoldingSchema: Schema<BaseReportInvestmentHolding> =
  s.object<BaseReportInvestmentHolding>({
    accountId: s.string(),
    securityId: s.string(),
    institutionPrice: s.number(),
    institutionPriceAsOf: s.optionalNullable(s.dateOnly()),
    institutionValue: s.number(),
    costBasis: s.nullable(s.number()),
    quantity: s.number(),
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    _keysMap: {
      accountId: "account_id",
      securityId: "security_id",
      institutionPrice: "institution_price",
      institutionPriceAsOf: "institution_price_as_of",
      institutionValue: "institution_value",
      costBasis: "cost_basis",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
