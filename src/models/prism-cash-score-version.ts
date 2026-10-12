import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The version of Prism CashScore. If not specified, will default to v3. */
export const PrismCashScoreVersion = {
  /** The `4.1` Prism CashScore version. */
  _41: "4.1",
  /** The `4` Prism CashScore version. */
  _4: "4",
  /** The `3_lite` Prism CashScore version. */
  _3Lite: "3_lite",
  /** The `3` Prism CashScore version. */
  _3: "3",
} as const;
export type PrismCashScoreVersion =
  | (typeof PrismCashScoreVersion)[keyof typeof PrismCashScoreVersion]
  | (string & {});

export const prismCashScoreVersionSchema: EnumSchema<PrismCashScoreVersion> =
  s.enumOf<PrismCashScoreVersion>(PrismCashScoreVersion);
