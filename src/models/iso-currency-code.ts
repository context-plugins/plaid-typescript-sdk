import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** An ISO-4217 currency code, used with e-wallets and transactions. */
export const IsoCurrencyCode = {
  Gbp: "GBP",
  Eur: "EUR",
} as const;
export type IsoCurrencyCode = (typeof IsoCurrencyCode)[keyof typeof IsoCurrencyCode] | (string & {});

export const isoCurrencyCodeSchema: EnumSchema<IsoCurrencyCode> = s.enumOf<IsoCurrencyCode>(IsoCurrencyCode);
