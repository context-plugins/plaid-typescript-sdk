import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionOverride = {
  dateTransacted: string;
  datePosted: string;
  amount: number;
  description: string;
  currency?: string;
};

export const transactionOverrideSchema: Schema<TransactionOverride> = s.object<TransactionOverride>({
  dateTransacted: s.dateOnly(),
  datePosted: s.dateOnly(),
  amount: s.number(),
  description: s.string(),
  currency: s.optional(s.string()),
  _keysMap: {
    dateTransacted: "date_transacted",
    datePosted: "date_posted",
  },
});
