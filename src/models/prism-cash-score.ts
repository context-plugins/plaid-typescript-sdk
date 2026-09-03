import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prismCashScoreMetadataSchema, type PrismCashScoreMetadata } from "./prism-cash-score-metadata.js";

export type PrismCashScore = {
  version: number;
  modelVersion?: string;
  score: number | null;
  reasonCodes?: string[];
  metadata?: PrismCashScoreMetadata;
  errorReason?: string;
};

export const prismCashScoreSchema: Schema<PrismCashScore> = s.object<PrismCashScore>({
  version: s.number(),
  modelVersion: s.optional(s.string()),
  score: s.nullable(s.number()),
  reasonCodes: s.optional(s.array(s.string())),
  metadata: s.optional(s.lazy(() => prismCashScoreMetadataSchema)),
  errorReason: s.optional(s.string()),
  _keysMap: {
    modelVersion: "model_version",
    reasonCodes: "reason_codes",
    errorReason: "error_reason",
  },
});
