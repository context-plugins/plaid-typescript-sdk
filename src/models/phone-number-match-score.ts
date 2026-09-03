import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PhoneNumberMatchScore = {
  score?: number | null;
};

export const phoneNumberMatchScoreSchema: Schema<PhoneNumberMatchScore> = s.object<PhoneNumberMatchScore>({
  score: s.optionalNullable(s.number()),
});
