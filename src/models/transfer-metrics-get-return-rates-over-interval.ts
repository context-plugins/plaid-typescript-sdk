import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details regarding return rates. */
export type TransferMetricsGetReturnRatesOverInterval = {
  /** The overall return rate. */
  overallReturnRate?: string;
  /** The unauthorized return rate. */
  unauthorizedReturnRate?: string;
  /** The administrative return rate. */
  administrativeReturnRate?: string;
};

export const transferMetricsGetReturnRatesOverIntervalSchema: Schema<TransferMetricsGetReturnRatesOverInterval> =
  s.object<TransferMetricsGetReturnRatesOverInterval>({
    overallReturnRate: s.optional(s.string()),
    unauthorizedReturnRate: s.optional(s.string()),
    administrativeReturnRate: s.optional(s.string()),
    _keysMap: {
      overallReturnRate: "overall_return_rate",
      unauthorizedReturnRate: "unauthorized_return_rate",
      administrativeReturnRate: "administrative_return_rate",
    },
  });
