import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { selfieAgeCheckStatusSchema, type SelfieAgeCheckStatus } from "./selfie-age-check-status.js";

/**
 * Age-estimation results from the selfie capture. This field is `null` when an age range could not
 * be estimated from the selfie capture.
 */
export type SelfieAgeCheck = {
  /**
   * An enum indicating whether the reported age aligns with the estimated selfie capture age range.
   *
   * `match` indicates that the reported age falls within the estimated selfie capture age range.
   *
   * `warning` indicates that the reported age falls outside the estimated selfie capture age range,
   * but is close enough that the result should be reviewed.
   *
   * `no_match` indicates that the reported age falls far outside the estimated selfie capture age
   * range.
   *
   * `no_data` indicates that there was not enough data available at age-estimation time to compare
   * the reported age against the estimated selfie capture age range.
   */
  status: SelfieAgeCheckStatus;
  /**
   * The user's age at the time of the selfie capture, calculated from the date of birth submitted
   * during Identity Verification. If multiple date of birth sources are available, the date of
   * birth submitted in the flow session takes priority over the document date of birth. This field
   * is `null` when the date of birth is unavailable.
   */
  reportedAge: number | null;
  /** Lower bound of the estimated age range from the selfie capture. */
  ageEstimateLowerBound: number;
  /** Upper bound of the estimated age range from the selfie capture. */
  ageEstimateUpperBound: number;
};

export const selfieAgeCheckSchema: Schema<SelfieAgeCheck> = s.object<SelfieAgeCheck>({
  status: selfieAgeCheckStatusSchema,
  reportedAge: s.nullable(s.int()),
  ageEstimateLowerBound: s.int(),
  ageEstimateUpperBound: s.int(),
  _keysMap: {
    reportedAge: "reported_age",
    ageEstimateLowerBound: "age_estimate_lower_bound",
    ageEstimateUpperBound: "age_estimate_upper_bound",
  },
});
