import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  unofficialCurrencyCodeListSchema,
  type UnofficialCurrencyCodeList,
} from "./unofficial-currency-code-list.js";

/** The following currency codes are supported by Plaid. */
export type StandaloneCurrencyCodeList = {
  /** Plaid supports all ISO 4217 currency codes. */
  isoCurrencyCode: string;
  /** List of unofficial currency codes */
  unofficialCurrencyCode: UnofficialCurrencyCodeList;
};

export const standaloneCurrencyCodeListSchema: Schema<StandaloneCurrencyCodeList> =
  s.object<StandaloneCurrencyCodeList>({
    isoCurrencyCode: s.string(),
    unofficialCurrencyCode: unofficialCurrencyCodeListSchema,
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
