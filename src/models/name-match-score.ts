import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Score found by matching name provided by the API with the name on the account at the financial
 * institution. If the account contains multiple owners, the maximum match score is filled.
 */
export type NameMatchScore = {
  /**
   * Match score for name. 100 is a perfect score, 99-85 means a strong match, 84-70 is a partial
   * match, any score less than 70 is a mismatch. Typically, the match threshold should be set to a
   * score of 70 or higher. If the name is missing from either the API or financial institution,
   * this is null.
   */
  score?: number | null;
  /** first or last name completely matched, likely a family member */
  isFirstNameOrLastNameMatch?: boolean | null;
  /** nickname matched, example Jennifer and Jenn. */
  isNicknameMatch?: boolean | null;
  /**
   * Is `true` if the name on either of the names that was matched for the score contained strings
   * indicative of a business name, such as "CORP", "LLC", "INC", or "LTD". A `true` result
   * generally indicates that an account's name is a business name. However, a `false` result does
   * not mean the account name is not a business name, as some businesses do not use these strings
   * in the names used for their financial institution accounts.
   */
  isBusinessNameDetected?: boolean | null;
};

export const nameMatchScoreSchema: Schema<NameMatchScore> = s.object<NameMatchScore>({
  score: s.optionalNullable(s.int()),
  isFirstNameOrLastNameMatch: s.optionalNullable(s.boolean()),
  isNicknameMatch: s.optionalNullable(s.boolean()),
  isBusinessNameDetected: s.optionalNullable(s.boolean()),
  _keysMap: {
    isFirstNameOrLastNameMatch: "is_first_name_or_last_name_match",
    isNicknameMatch: "is_nickname_match",
    isBusinessNameDetected: "is_business_name_detected",
  },
});
