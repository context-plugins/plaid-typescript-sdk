import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trustIndexSubscoresSchema, type TrustIndexSubscores } from "./trust-index-subscores.js";

/** Represents a calculated Trust Index Score. */
export type TrustIndex = {
  /** The overall trust index score. */
  score: number;
  /** The versioned name of the Trust Index model used for scoring. */
  model: string;
  /** Contains sub-score metadata. */
  subscores: TrustIndexSubscores | null;
};

export const trustIndexSchema: Schema<TrustIndex> = s.object<TrustIndex>({
  score: s.int(),
  model: s.string(),
  subscores: s.nullable(s.lazy(() => trustIndexSubscoresSchema)),
});
