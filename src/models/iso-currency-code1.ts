import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IsoCurrencyCode1 = {
  Usd: "USD",
} as const;
export type IsoCurrencyCode1 = (typeof IsoCurrencyCode1)[keyof typeof IsoCurrencyCode1] | (string & {});

export const isoCurrencyCode1Schema: EnumSchema<IsoCurrencyCode1> =
  s.enumOf<IsoCurrencyCode1>(IsoCurrencyCode1);
