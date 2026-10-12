import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  businessFieldMatchSummarySchema,
  type BusinessFieldMatchSummary,
} from "./business-field-match-summary.js";
import {
  businessVerificationStatusWebPresenceCheckSchema,
  type BusinessVerificationStatusWebPresenceCheck,
} from "./business-verification-status-web-presence-check.js";
import { businessWebsiteAnalysisSchema, type BusinessWebsiteAnalysis } from "./business-website-analysis.js";

/** Results from the digital presence check. */
export type BusinessDigitalPresenceCheck = {
  /** Status of the digital presence check */
  status: BusinessVerificationStatusWebPresenceCheck;
  /** A score from 0 to 100 indicating digital presence confidence. */
  score: number;
  /** Summary of how a specific business field matched against data provider results */
  address: BusinessFieldMatchSummary;
  /** Summary of how a specific business field matched against data provider results */
  phoneNumber: BusinessFieldMatchSummary;
  /** Summary of how a specific business field matched against data provider results */
  emailAddress: BusinessFieldMatchSummary;
  /** Summary of how a specific business field matched against data provider results */
  website: BusinessFieldMatchSummary;
  /**
   * Website analysis details if a website is found for the provided website in the search terms.
   */
  websiteAnalysis: BusinessWebsiteAnalysis | null;
};

export const businessDigitalPresenceCheckSchema: Schema<BusinessDigitalPresenceCheck> =
  s.object<BusinessDigitalPresenceCheck>({
    status: businessVerificationStatusWebPresenceCheckSchema,
    score: s.int(),
    address: businessFieldMatchSummarySchema,
    phoneNumber: businessFieldMatchSummarySchema,
    emailAddress: businessFieldMatchSummarySchema,
    website: businessFieldMatchSummarySchema,
    websiteAnalysis: s.nullable(s.lazy(() => businessWebsiteAnalysisSchema)),
    _keysMap: {
      phoneNumber: "phone_number",
      emailAddress: "email_address",
      websiteAnalysis: "website_analysis",
    },
  });
