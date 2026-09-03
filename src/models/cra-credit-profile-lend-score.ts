import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraCreditProfileLendScore = {
  score: number | null;
  reasonCodes: string[];
  variant: string;
  errorReason: string | null;
};

export const craCreditProfileLendScoreSchema: Schema<CraCreditProfileLendScore> =
  s.object<CraCreditProfileLendScore>({
    score: s.nullable(s.number()),
    reasonCodes: s.array(s.string()),
    variant: s.string(),
    errorReason: s.nullable(s.string()),
    _keysMap: {
      reasonCodes: "reason_codes",
      errorReason: "error_reason",
    },
  });
