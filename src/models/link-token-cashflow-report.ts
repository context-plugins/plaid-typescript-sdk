import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configuration parameters for the Cashflow Report product. Currently in closed beta. */
export type LinkTokenCashflowReport = {
  /**
   * Number of days of transaction history to request in the Cashflow Report product.
   *
   * @default 365
   */
  daysRequested?: number;
};

export const linkTokenCashflowReportSchema: Schema<LinkTokenCashflowReport> =
  s.object<LinkTokenCashflowReport>({
    daysRequested: s.defaulted(s.int(), 365),
    _keysMap: {
      daysRequested: "days_requested",
    },
  });
