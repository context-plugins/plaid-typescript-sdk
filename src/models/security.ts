import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fixedIncomeSchema, type FixedIncome } from "./fixed-income.js";
import { optionContractSchema, type OptionContract } from "./option-contract.js";

export type Security = {
  securityId: string;
  isin: string | null;
  cusip: string | null;
  sedol: string | null;
  institutionSecurityId: string | null;
  institutionId: string | null;
  proxySecurityId: string | null;
  name: string | null;
  tickerSymbol: string | null;
  isCashEquivalent: boolean | null;
  type: string | null;
  subtype?: string | null;
  closePrice: number | null;
  closePriceAsOf: string | null;
  updateDatetime?: Date | null;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
  marketIdentifierCode: string | null;
  sector: string | null;
  industry: string | null;
  cfiCode: string | null;
  figi: string | null;
  optionContract: OptionContract | null;
  fixedIncome: FixedIncome | null;
};

export const securitySchema: Schema<Security> = s.object<Security>({
  securityId: s.string(),
  isin: s.nullable(s.string()),
  cusip: s.nullable(s.string()),
  sedol: s.nullable(s.string()),
  institutionSecurityId: s.nullable(s.string()),
  institutionId: s.nullable(s.string()),
  proxySecurityId: s.nullable(s.string()),
  name: s.nullable(s.string()),
  tickerSymbol: s.nullable(s.string()),
  isCashEquivalent: s.nullable(s.boolean()),
  type: s.nullable(s.string()),
  subtype: s.optionalNullable(s.string()),
  closePrice: s.nullable(s.number()),
  closePriceAsOf: s.nullable(s.dateOnly()),
  updateDatetime: s.optionalNullable(s.dateTime()),
  isoCurrencyCode: s.nullable(s.string()),
  unofficialCurrencyCode: s.nullable(s.string()),
  marketIdentifierCode: s.nullable(s.string()),
  sector: s.nullable(s.string()),
  industry: s.nullable(s.string()),
  cfiCode: s.nullable(s.string()),
  figi: s.nullable(s.string()),
  optionContract: s.nullable(s.lazy(() => optionContractSchema)),
  fixedIncome: s.nullable(s.lazy(() => fixedIncomeSchema)),
  _keysMap: {
    securityId: "security_id",
    institutionSecurityId: "institution_security_id",
    institutionId: "institution_id",
    proxySecurityId: "proxy_security_id",
    tickerSymbol: "ticker_symbol",
    isCashEquivalent: "is_cash_equivalent",
    closePrice: "close_price",
    closePriceAsOf: "close_price_as_of",
    updateDatetime: "update_datetime",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    marketIdentifierCode: "market_identifier_code",
    cfiCode: "cfi_code",
    optionContract: "option_contract",
    fixedIncome: "fixed_income",
  },
});
