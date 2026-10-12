import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The results of the LendScore */
export type LendScore = {
  /**
   * The score returned by the LendScore model. Will be an integer in the range 1 to 99. Higher
   * scores indicate lower credit risk.
   */
  score?: number | null;
  /**
   * The reasons for an individual having risk according to the LendScore. For a full list of
   * possible reason codes and a mapping of reason codes to human-readable reasons, contact your
   * Plaid account manager. Different LendScore versions will use different sets of reason codes.
   */
  reasonCodes?: string[];
  /** Human-readable description of why the LendScore could not be computed. */
  errorReason?: string | null;
};

export const lendScoreSchema: Schema<LendScore> = s.object<LendScore>({
  score: s.optionalNullable(s.int()),
  reasonCodes: s.optional(s.array(s.string())),
  errorReason: s.optionalNullable(s.string()),
  _keysMap: {
    reasonCodes: "reason_codes",
    errorReason: "error_reason",
  },
});
