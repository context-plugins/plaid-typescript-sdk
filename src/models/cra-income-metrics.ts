import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craCurrentModeledIncomeSchema, type CraCurrentModeledIncome } from "./cra-current-modeled-income.js";
import {
  craProjectedModeledIncomeSchema,
  type CraProjectedModeledIncome,
} from "./cra-projected-modeled-income.js";

export type CraIncomeMetrics = {
  current: CraCurrentModeledIncome | null;
  projected: CraProjectedModeledIncome | null;
  isoCurrencyCode: string | null;
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
