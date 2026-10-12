import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Buying an investment */
export const BuyType = {
  Assignment: "assignment",
  Contribution: "contribution",
  Buy: "buy",
  BuyToCover: "buy to cover",
  DividendReinvestment: "dividend reinvestment",
  InterestReinvestment: "interest reinvestment",
  LongTermCapitalGainReinvestment: "long-term capital gain reinvestment",
  ShortTermCapitalGainReinvestment: "short-term capital gain reinvestment",
} as const;
export type BuyType = (typeof BuyType)[keyof typeof BuyType] | (string & {});

export const buyTypeSchema: EnumSchema<BuyType> = s.enumOf<BuyType>(BuyType);
