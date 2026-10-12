import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Result summary object specifying values for the `facial_duplicates` attributes of risk check. */
export type RiskCheckFacialDuplicate = {
  /** ID of the associated Identity Verification attempt. */
  id: string;
  /** Similarity score of the match. Ranges from 0 to 100. */
  similarity: number;
  /**
   * Whether this match occurred after the session was complete. For example, this would be `true`
   * if a later session ended up matching this one.
   */
  matchedAfterCompleted: boolean;
};

export const riskCheckFacialDuplicateSchema: Schema<RiskCheckFacialDuplicate> =
  s.object<RiskCheckFacialDuplicate>({
    id: s.string(),
    similarity: s.int(),
    matchedAfterCompleted: s.boolean(),
    _keysMap: {
      matchedAfterCompleted: "matched_after_completed",
    },
  });
