import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craCurrentModeledIncomeSchema, type CraCurrentModeledIncome } from "./cra-current-modeled-income.js";
import {
  craProjectedModeledIncomeSchema,
  type CraProjectedModeledIncome,
} from "./cra-projected-modeled-income.js";

/** Modeled income metrics for a given income stream or user summary. */
export type CraIncomeMetrics = {
  /** Modeled estimate of current income based on recently observed income transactions. */
  current: CraCurrentModeledIncome | null;
  /**
   * Forward-looking modeled estimate of income based on recent income transactions and trends in
   * active streams.
   */
  projected: CraProjectedModeledIncome | null;
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

export const craIncomeMetricsSchema: Schema<CraIncomeMetrics> = s.object<CraIncomeMetrics>({
  current: s.nullable(s.lazy(() => craCurrentModeledIncomeSchema)),
  projected: s.nullable(s.lazy(() => craProjectedModeledIncomeSchema)),
  isoCurrencyCode: s.nullable(s.string()),
  unofficialCurrencyCode: s.nullable(s.string()),
  _keysMap: {
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
  },
});
