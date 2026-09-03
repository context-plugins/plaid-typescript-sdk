import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomSandboxTransaction = {
  dateTransacted: string;
  datePosted: string;
  amount: number;
  description: string;
  isoCurrencyCode?: string;
};

export const customSandboxTransactionSchema: Schema<CustomSandboxTransaction> =
  s.object<CustomSandboxTransaction>({
    dateTransacted: s.dateOnly(),
    datePosted: s.dateOnly(),
    amount: s.number(),
    description: s.string(),
    isoCurrencyCode: s.optional(s.string()),
    _keysMap: {
      dateTransacted: "date_transacted",
      datePosted: "date_posted",
      isoCurrencyCode: "iso_currency_code",
    },
  });
