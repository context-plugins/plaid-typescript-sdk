import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craVerificationModeledIncomeSchema,
  type CraVerificationModeledIncome,
} from "./cra-verification-modeled-income.js";

/** Modeled income metrics for a given income stream or user summary. */
export type CraVerificationIncomeMetrics = {
  /** Modeled estimate of current income based on recently observed income transactions. */
  current: CraVerificationModeledIncome | null;
  /** The ISO 4217 currency code of the amount or balance. */
  isoCurrencyCode: string | null;
  /**
   * The unofficial currency code associated with the amount or balance. Always `null` if
   * `iso_currency_code` is non-null. Unofficial currency codes are used for currencies that do not
   * have official ISO currency codes, such as cryptocurrencies and the currencies of certain
   * countries.
   */
  unofficialCurrencyCode: string | null;
};

export const craVerificationIncomeMetricsSchema: Schema<CraVerificationIncomeMetrics> =
  s.object<CraVerificationIncomeMetrics>({
    current: s.nullable(s.lazy(() => craVerificationModeledIncomeSchema)),
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
