import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RiskCheckFacialDuplicate = {
  id: string;
  similarity: number;
  matchedAfterCompleted: boolean;
};

export const riskCheckFacialDuplicateSchema: Schema<RiskCheckFacialDuplicate> =
  s.object<RiskCheckFacialDuplicate>({
    id: s.string(),
    similarity: s.number(),
    matchedAfterCompleted: s.boolean(),
    _keysMap: {
      matchedAfterCompleted: "matched_after_completed",
    },
  });
