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

export type BusinessKybCheck = {
  status: BusinessVerificationStatus;
  score: number;
  name: BusinessFieldMatchSummary;
  address: BusinessFieldMatchSummary;
  website: BusinessFieldMatchSummary;
  matchDetails: BusinessKybMatchDetails | null;
};

export const businessKybCheckSchema: Schema<BusinessKybCheck> = s.object<BusinessKybCheck>({
  status: businessVerificationStatusSchema,
  score: s.number(),
  name: businessFieldMatchSummarySchema,
  address: businessFieldMatchSummarySchema,
  website: businessFieldMatchSummarySchema,
  matchDetails: s.nullable(s.lazy(() => businessKybMatchDetailsSchema)),
  _keysMap: {
    matchDetails: "match_details",
  },
});
