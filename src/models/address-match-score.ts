import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AddressMatchScore = {
  score?: number | null;
  isPostalCodeMatch?: boolean | null;
};

export const addressMatchScoreSchema: Schema<AddressMatchScore> = s.object<AddressMatchScore>({
  score: s.optionalNullable(s.number()),
  isPostalCodeMatch: s.optionalNullable(s.boolean()),
  _keysMap: {
    isPostalCodeMatch: "is_postal_code_match",
  },
});
