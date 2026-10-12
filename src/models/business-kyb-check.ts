import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  businessFieldMatchSummarySchema,
  type BusinessFieldMatchSummary,
} from "./business-field-match-summary.js";
import { businessKybMatchDetailsSchema, type BusinessKybMatchDetails } from "./business-kyb-match-details.js";
import {
  businessVerificationStatusSchema,
  type BusinessVerificationStatus,
} from "./business-verification-status.js";

/** Results from the KYB (Know Your Business) identity verification check */
export type BusinessKybCheck = {
  /** Status of the KYB (Know Your Business) identity assessment check */
  status: BusinessVerificationStatus;
  /**
   * A score from 0 to 100 indicating the confidence in KYB (Know Your Business) identity assessment
   * for the business
   */
  score: number;
  /** Summary of how a specific business field matched against data provider results */
  name: BusinessFieldMatchSummary;
  /** Summary of how a specific business field matched against data provider results */
  address: BusinessFieldMatchSummary;
  /** Summary of how a specific business field matched against data provider results */
  website: BusinessFieldMatchSummary;
  /** Detailed information about the business from data provider results */
  matchDetails: BusinessKybMatchDetails | null;
};

export const businessKybCheckSchema: Schema<BusinessKybCheck> = s.object<BusinessKybCheck>({
  status: businessVerificationStatusSchema,
  score: s.int(),
  name: businessFieldMatchSummarySchema,
  address: businessFieldMatchSummarySchema,
  website: businessFieldMatchSummarySchema,
  matchDetails: s.nullable(s.lazy(() => businessKybMatchDetailsSchema)),
  _keysMap: {
    matchDetails: "match_details",
  },
});
