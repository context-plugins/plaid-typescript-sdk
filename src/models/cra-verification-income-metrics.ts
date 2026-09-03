import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craVerificationModeledIncomeSchema,
  type CraVerificationModeledIncome,
} from "./cra-verification-modeled-income.js";

export type CraVerificationIncomeMetrics = {
  current: CraVerificationModeledIncome | null;
  isoCurrencyCode: string | null;
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
