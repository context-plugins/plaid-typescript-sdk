import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxPublicTokenCreateRequestOptionsTransactions = {
  startDate?: string;
  endDate?: string;
  daysRequested?: number;
};

export const sandboxPublicTokenCreateRequestOptionsTransactionsSchema: Schema<SandboxPublicTokenCreateRequestOptionsTransactions> =
  s.object<SandboxPublicTokenCreateRequestOptionsTransactions>({
    startDate: s.optional(s.dateOnly()),
    endDate: s.optional(s.dateOnly()),
    daysRequested: s.optional(s.number()),
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
      daysRequested: "days_requested",
    },
  });
