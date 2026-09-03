import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LendScore = {
  score?: number | null;
  reasonCodes?: string[];
  errorReason?: string | null;
};

export const lendScoreSchema: Schema<LendScore> = s.object<LendScore>({
  score: s.optionalNullable(s.number()),
  reasonCodes: s.optional(s.array(s.string())),
  errorReason: s.optionalNullable(s.string()),
  _keysMap: {
    reasonCodes: "reason_codes",
    errorReason: "error_reason",
  },
});
