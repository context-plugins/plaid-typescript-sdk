import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trustIndexSubscoresSchema, type TrustIndexSubscores } from "./trust-index-subscores.js";

export type TrustIndex = {
  score: number;
  model: string;
  subscores: TrustIndexSubscores | null;
};

export const trustIndexSchema: Schema<TrustIndex> = s.object<TrustIndex>({
  score: s.number(),
  model: s.string(),
  subscores: s.nullable(s.lazy(() => trustIndexSubscoresSchema)),
});
