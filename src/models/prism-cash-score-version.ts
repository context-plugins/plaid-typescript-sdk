import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PrismCashScoreVersion = {
  _41: "4.1",
  _4: "4",
  _3Lite: "3_lite",
  _3: "3",
} as const;
export type PrismCashScoreVersion =
  | (typeof PrismCashScoreVersion)[keyof typeof PrismCashScoreVersion]
  | (string & {});

export const prismCashScoreVersionSchema: EnumSchema<PrismCashScoreVersion> =
  s.enumOf<PrismCashScoreVersion>(PrismCashScoreVersion);
