import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The predicted industry classification for the business, based on digital presence assessments.
 */
export type BusinessIndustryPrediction = {
  /** NAICS code for the predicted business industry. */
  code: number;
  /** The business industry classification of the predicted NAICS code. */
  title: string;
};

export const businessIndustryPredictionSchema: Schema<BusinessIndustryPrediction> =
  s.object<BusinessIndustryPrediction>({
    code: s.int(),
    title: s.string(),
  });
