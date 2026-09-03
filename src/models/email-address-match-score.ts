import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EmailAddressMatchScore = {
  score?: number | null;
};

export const emailAddressMatchScoreSchema: Schema<EmailAddressMatchScore> = s.object<EmailAddressMatchScore>({
  score: s.optionalNullable(s.number()),
});
