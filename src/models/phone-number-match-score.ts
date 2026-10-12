import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Score found by matching phone number provided by the API with the phone number on the account at
 * the financial institution. 100 is a perfect match and 0 is a no match. If the account contains
 * multiple owners, the maximum match score is filled.
 */
export type PhoneNumberMatchScore = {
  /**
   * Match score for normalized phone number. 100 is a perfect match, 99-70 is a partial match
   * (matching the same phone number with extension against one without extension, etc.), anything
   * below 70 is considered a mismatch. Typically, the match threshold should be set to a score of
   * 70 or higher. If the phone number is missing from either the API or financial institution, this
   * is null.
   */
  score?: number | null;
};

export const phoneNumberMatchScoreSchema: Schema<PhoneNumberMatchScore> = s.object<PhoneNumberMatchScore>({
  score: s.optionalNullable(s.int()),
});
