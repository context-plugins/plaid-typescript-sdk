import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BusinessIndustryPredictionNullable = {
  code: number;
  title: string;
};

export const businessIndustryPredictionNullableSchema: Schema<BusinessIndustryPredictionNullable> =
  s.object<BusinessIndustryPredictionNullable>({
    code: s.number(),
    title: s.string(),
  });
