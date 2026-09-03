import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PrismInsights = {
  version: number;
  modelVersion?: string;
  result?: Record<string, unknown>;
  errorReason?: string;
};

export const prismInsightsSchema: Schema<PrismInsights> = s.object<PrismInsights>({
  version: s.number(),
  modelVersion: s.optional(s.string()),
  result: s.optional(s.record(s.string(), s.unknown())),
  errorReason: s.optional(s.string()),
  _keysMap: {
    modelVersion: "model_version",
    errorReason: "error_reason",
  },
});
