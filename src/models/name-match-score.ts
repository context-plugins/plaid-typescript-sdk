import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NameMatchScore = {
  score?: number | null;
  isFirstNameOrLastNameMatch?: boolean | null;
  isNicknameMatch?: boolean | null;
  isBusinessNameDetected?: boolean | null;
};

export const nameMatchScoreSchema: Schema<NameMatchScore> = s.object<NameMatchScore>({
  score: s.optionalNullable(s.number()),
  isFirstNameOrLastNameMatch: s.optionalNullable(s.boolean()),
  isNicknameMatch: s.optionalNullable(s.boolean()),
  isBusinessNameDetected: s.optionalNullable(s.boolean()),
  _keysMap: {
    isFirstNameOrLastNameMatch: "is_first_name_or_last_name_match",
    isNicknameMatch: "is_nickname_match",
    isBusinessNameDetected: "is_business_name_detected",
  },
});
