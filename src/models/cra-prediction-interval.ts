import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The object containing prediction interval data. */
export type CraPredictionInterval = {
  /** The lower bound of the predicted attribute for the given probability. */
  lowerBound?: number | null;
  /** The upper bound of the predicted attribute for the given probability. */
  upperBound?: number | null;
  /**
   * The probability of the actual value of the attribute falling within the upper and lower bound.
   * This is a percentage represented as a value between 0 and 1.
   */
  probability?: number | null;
};

export const craPredictionIntervalSchema: Schema<CraPredictionInterval> = s.object<CraPredictionInterval>({
  lowerBound: s.optionalNullable(s.float64()),
  upperBound: s.optionalNullable(s.float64()),
  probability: s.optionalNullable(s.float64()),
  _keysMap: {
    lowerBound: "lower_bound",
    upperBound: "upper_bound",
  },
});
