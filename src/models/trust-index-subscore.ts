import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents Trust Index Subscore. */
export type TrustIndexSubscore = {
  /** The subscore score. */
  score: number;
};

export const trustIndexSubscoreSchema: Schema<TrustIndexSubscore> = s.object<TrustIndexSubscore>({
  score: s.int(),
});
