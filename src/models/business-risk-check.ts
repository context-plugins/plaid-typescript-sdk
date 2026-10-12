import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  businessIndustryPredictionNullableSchema,
  type BusinessIndustryPredictionNullable,
} from "./business-industry-prediction-nullable.js";
import {
  businessVerificationStatusRiskCheckSchema,
  type BusinessVerificationStatusRiskCheck,
} from "./business-verification-status-risk-check.js";

/** Results from the business risk assessment check */
export type BusinessRiskCheck = {
  /** Status of the business risk assessment check */
  status: BusinessVerificationStatusRiskCheck;
  /** A score from 0 to 100 indicating the risk assessment for the business */
  score: number;
  /** Nullable industry prediction details. */
  industryPrediction: BusinessIndustryPredictionNullable | null;
};

export const businessRiskCheckSchema: Schema<BusinessRiskCheck> = s.object<BusinessRiskCheck>({
  status: businessVerificationStatusRiskCheckSchema,
  score: s.int(),
  industryPrediction: s.nullable(s.lazy(() => businessIndustryPredictionNullableSchema)),
  _keysMap: {
    industryPrediction: "industry_prediction",
  },
});
