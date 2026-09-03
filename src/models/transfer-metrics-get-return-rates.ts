import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferMetricsGetReturnRatesOverIntervalSchema,
  type TransferMetricsGetReturnRatesOverInterval,
} from "./transfer-metrics-get-return-rates-over-interval.js";

export type TransferMetricsGetReturnRates = {
  last60D?: TransferMetricsGetReturnRatesOverInterval | null;
};

export const transferMetricsGetReturnRatesSchema: Schema<TransferMetricsGetReturnRates> =
  s.object<TransferMetricsGetReturnRates>({
    last60D: s.optionalNullable(s.lazy(() => transferMetricsGetReturnRatesOverIntervalSchema)),
    _keysMap: {
      last60D: "last_60d",
    },
  });
