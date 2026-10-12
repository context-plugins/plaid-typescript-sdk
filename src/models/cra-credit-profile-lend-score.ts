import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An individual LendScore result within a credit profile report. */
export type CraCreditProfileLendScore = {
  /**
   * The score returned by the LendScore model. Will be an integer in the range 1 to 99. Higher
   * scores indicate lower credit risk.
   */
  score: number | null;
  /**
   * The reasons for an individual having risk according to the LendScore. For a full list of
   * possible reason codes and a mapping of reason codes to human-readable reasons, contact your
   * Plaid account manager. Different LendScore versions will use different sets of reason codes.
   */
  reasonCodes: string[];
  /** The variant identifier for this LendScore result. */
  variant: string;
  /** Human-readable description of why the LendScore could not be computed. */
  errorReason: string | null;
};

export const craCreditProfileLendScoreSchema: Schema<CraCreditProfileLendScore> =
  s.object<CraCreditProfileLendScore>({
    score: s.nullable(s.int()),
    reasonCodes: s.array(s.string()),
    variant: s.string(),
    errorReason: s.nullable(s.string()),
    _keysMap: {
      reasonCodes: "reason_codes",
      errorReason: "error_reason",
    },
  });
