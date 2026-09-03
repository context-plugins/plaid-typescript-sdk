import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraPredictionInterval = {
  lowerBound?: number | null;
  upperBound?: number | null;
  probability?: number | null;
};

export const craPredictionIntervalSchema: Schema<CraPredictionInterval> = s.object<CraPredictionInterval>({
  lowerBound: s.optionalNullable(s.number()),
  upperBound: s.optionalNullable(s.number()),
  probability: s.optionalNullable(s.number()),
  _keysMap: {
    lowerBound: "lower_bound",
    upperBound: "upper_bound",
  },
});
