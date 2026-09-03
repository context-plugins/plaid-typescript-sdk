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

export type BusinessDigitalPresenceCheck = {
  status: BusinessVerificationStatusWebPresenceCheck;
  score: number;
  address: BusinessFieldMatchSummary;
  phoneNumber: BusinessFieldMatchSummary;
  emailAddress: BusinessFieldMatchSummary;
  website: BusinessFieldMatchSummary;
  websiteAnalysis: BusinessWebsiteAnalysis | null;
};

export const businessDigitalPresenceCheckSchema: Schema<BusinessDigitalPresenceCheck> =
  s.object<BusinessDigitalPresenceCheck>({
    status: businessVerificationStatusWebPresenceCheckSchema,
    score: s.number(),
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
