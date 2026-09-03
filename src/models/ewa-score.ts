import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EwaScore = {
  lowestAmount?: number;
  highestAmount?: number;
  score?: number;
};

export const ewaScoreSchema: Schema<EwaScore> = s.object<EwaScore>({
  lowestAmount: s.optional(s.number()),
  highestAmount: s.optional(s.number()),
  score: s.optional(s.number()),
  _keysMap: {
    lowestAmount: "lowest_amount",
    highestAmount: "highest_amount",
  },
});
