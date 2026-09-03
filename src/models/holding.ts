import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { holdingTaxLotSchema, type HoldingTaxLot } from "./holding-tax-lot.js";

export type Holding = {
  accountId: string;
  securityId: string;
  institutionPrice: number;
  institutionPriceAsOf?: string | null;
  institutionPriceDatetime?: Date | null;
  institutionValue: number;
  costBasis: number | null;
  quantity: number;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
  vestedQuantity?: number | null;
  vestedValue?: number | null;
  taxLots?: HoldingTaxLot[];
};

export const holdingSchema: Schema<Holding> = s.object<Holding>({
  accountId: s.string(),
  securityId: s.string(),
  institutionPrice: s.number(),
  institutionPriceAsOf: s.optionalNullable(s.dateOnly()),
  institutionPriceDatetime: s.optionalNullable(s.dateTime()),
  institutionValue: s.number(),
  costBasis: s.nullable(s.number()),
  quantity: s.number(),
  isoCurrencyCode: s.nullable(s.string()),
  unofficialCurrencyCode: s.nullable(s.string()),
  vestedQuantity: s.optionalNullable(s.number()),
  vestedValue: s.optionalNullable(s.number()),
  taxLots: s.optional(s.array(s.lazy(() => holdingTaxLotSchema))),
  _keysMap: {
    accountId: "account_id",
    securityId: "security_id",
    institutionPrice: "institution_price",
    institutionPriceAsOf: "institution_price_as_of",
    institutionPriceDatetime: "institution_price_datetime",
    institutionValue: "institution_value",
    costBasis: "cost_basis",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    vestedQuantity: "vested_quantity",
    vestedValue: "vested_value",
    taxLots: "tax_lots",
  },
});
