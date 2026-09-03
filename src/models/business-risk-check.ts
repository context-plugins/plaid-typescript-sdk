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

export type BusinessRiskCheck = {
  status: BusinessVerificationStatusRiskCheck;
  score: number;
  industryPrediction: BusinessIndustryPredictionNullable | null;
};

export const businessRiskCheckSchema: Schema<BusinessRiskCheck> = s.object<BusinessRiskCheck>({
  status: businessVerificationStatusRiskCheckSchema,
  score: s.number(),
  industryPrediction: s.nullable(s.lazy(() => businessIndustryPredictionNullableSchema)),
  _keysMap: {
    industryPrediction: "industry_prediction",
  },
});
