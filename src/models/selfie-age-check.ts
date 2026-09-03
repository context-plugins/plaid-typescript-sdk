import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { selfieAgeCheckStatusSchema, type SelfieAgeCheckStatus } from "./selfie-age-check-status.js";

export type SelfieAgeCheck = {
  status: SelfieAgeCheckStatus;
  reportedAge: number | null;
  ageEstimateLowerBound: number;
  ageEstimateUpperBound: number;
};

export const selfieAgeCheckSchema: Schema<SelfieAgeCheck> = s.object<SelfieAgeCheck>({
  status: selfieAgeCheckStatusSchema,
  reportedAge: s.nullable(s.number()),
  ageEstimateLowerBound: s.number(),
  ageEstimateUpperBound: s.number(),
  _keysMap: {
    reportedAge: "reported_age",
    ageEstimateLowerBound: "age_estimate_lower_bound",
    ageEstimateUpperBound: "age_estimate_upper_bound",
  },
});
