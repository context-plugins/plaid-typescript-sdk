import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Selling an investment */
export const SellType = {
  Distribution: "distribution",
  Exercise: "exercise",
  Sell: "sell",
  SellShort: "sell short",
} as const;
export type SellType = (typeof SellType)[keyof typeof SellType] | (string & {});

export const sellTypeSchema: EnumSchema<SellType> = s.enumOf<SellType>(SellType);
