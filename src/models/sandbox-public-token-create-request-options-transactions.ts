import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An optional set of parameters corresponding to transactions options. */
export type SandboxPublicTokenCreateRequestOptionsTransactions = {
  /**
   * The earliest date for which to fetch transaction history. Dates should be formatted as
   * YYYY-MM-DD.
   */
  startDate?: string;
  /**
   * The most recent date for which to fetch transaction history. Dates should be formatted as
   * YYYY-MM-DD.
   */
  endDate?: string;
  /**
   * The maximum number of days of transaction history to request for the Transactions product.
   *
   * @default 90
   */
  daysRequested?: number;
};

export const sandboxPublicTokenCreateRequestOptionsTransactionsSchema: Schema<SandboxPublicTokenCreateRequestOptionsTransactions> =
  s.object<SandboxPublicTokenCreateRequestOptionsTransactions>({
    startDate: s.optional(s.dateOnly()),
    endDate: s.optional(s.dateOnly()),
    daysRequested: s.defaulted(s.int(), 90),
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
      daysRequested: "days_requested",
    },
  });
