import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IsoCurrencyCode = {
  Gbp: "GBP",
  Eur: "EUR",
} as const;
export type IsoCurrencyCode = (typeof IsoCurrencyCode)[keyof typeof IsoCurrencyCode] | (string & {});

export const isoCurrencyCodeSchema: EnumSchema<IsoCurrencyCode> = s.enumOf<IsoCurrencyCode>(IsoCurrencyCode);
