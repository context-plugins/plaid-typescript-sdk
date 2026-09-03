import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BusinessIndustryPrediction = {
  code: number;
  title: string;
};

export const businessIndustryPredictionSchema: Schema<BusinessIndustryPrediction> =
  s.object<BusinessIndustryPrediction>({
    code: s.number(),
    title: s.string(),
  });
