import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Nullable industry prediction details. */
export type BusinessIndustryPredictionNullable = {
  /** NAICS code for the predicted business industry. */
  code: number;
  /** The business industry classification of the predicted NAICS code. */
  title: string;
};

export const businessIndustryPredictionNullableSchema: Schema<BusinessIndustryPredictionNullable> =
  s.object<BusinessIndustryPredictionNullable>({
    code: s.int(),
    title: s.string(),
  });
