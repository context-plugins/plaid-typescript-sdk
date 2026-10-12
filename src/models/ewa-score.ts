import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** EwaScore represents an earned wage access score for a specific advance amount range. */
export type EwaScore = {
  /**
   * Float value representing the lower bound (inclusive) of the advance amount range associated
   * with a specific EWA score.
   */
  lowestAmount?: number;
  /**
   * Float value representing the upper bound (exclusive) of the advance amount range associated
   * with a specific EWA score.
   */
  highestAmount?: number;
  /**
   * EWA score for the corresponding amount bucket. Scores range from 1-99, where a higher score
   * indicates a higher likelihood of repayment.
   */
  score?: number;
};

export const ewaScoreSchema: Schema<EwaScore> = s.object<EwaScore>({
  lowestAmount: s.optional(s.float64()),
  highestAmount: s.optional(s.float64()),
  score: s.optional(s.int()),
  _keysMap: {
    lowestAmount: "lowest_amount",
    highestAmount: "highest_amount",
  },
});
