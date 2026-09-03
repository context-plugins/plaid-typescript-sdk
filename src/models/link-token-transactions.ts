import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenTransactions = {
  daysRequested?: number;
};

export const linkTokenTransactionsSchema: Schema<LinkTokenTransactions> = s.object<LinkTokenTransactions>({
  daysRequested: s.optional(s.number()),
  _keysMap: {
    daysRequested: "days_requested",
  },
});
