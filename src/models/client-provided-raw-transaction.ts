import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientProvidedRawTransaction = {
  id: string;
  description: string;
  amount: number;
  isoCurrencyCode: string;
};

export const clientProvidedRawTransactionSchema: Schema<ClientProvidedRawTransaction> =
  s.object<ClientProvidedRawTransaction>({
    id: s.string(),
    description: s.string(),
    amount: s.number(),
    isoCurrencyCode: s.string(),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
    },
  });
