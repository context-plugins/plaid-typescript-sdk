import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrustIndexSubscore = {
  score: number;
};

export const trustIndexSubscoreSchema: Schema<TrustIndexSubscore> = s.object<TrustIndexSubscore>({
  score: s.number(),
});
