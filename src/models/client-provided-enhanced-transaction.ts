import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { enhancementsSchema, type Enhancements } from "./enhancements.js";

export type ClientProvidedEnhancedTransaction = {
  id: string;
  description: string;
  amount: number;
  isoCurrencyCode: string;
  enhancements: Enhancements;
};

export const clientProvidedEnhancedTransactionSchema: Schema<ClientProvidedEnhancedTransaction> =
  s.object<ClientProvidedEnhancedTransaction>({
    id: s.string(),
    description: s.string(),
    amount: s.number(),
    isoCurrencyCode: s.string(),
    enhancements: enhancementsSchema,
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
    },
  });
