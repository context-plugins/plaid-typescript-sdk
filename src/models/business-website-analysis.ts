import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  businessCheckBooleanStatusSchema,
  type BusinessCheckBooleanStatus,
} from "./business-check-boolean-status.js";
import {
  businessWebsiteBuildStatusSchema,
  type BusinessWebsiteBuildStatus,
} from "./business-website-build-status.js";
import { businessWebsiteSslSchema, type BusinessWebsiteSsl } from "./business-website-ssl.js";
import { businessWhoisRecordSchema, type BusinessWhoisRecord } from "./business-whois-record.js";

/** Website analysis details if a website is found for the provided website in the search terms. */
export type BusinessWebsiteAnalysis = {
  /** Tri-state boolean status, where `no_data` indicates the check could not determine a value. */
  isParked: BusinessCheckBooleanStatus;
  /** Tri-state boolean status, where `no_data` indicates the check could not determine a value. */
  emailIsDeliverable: BusinessCheckBooleanStatus;
  /** Build status of the business website. */
  websiteBuildStatus: BusinessWebsiteBuildStatus;
  /** WHOIS metadata for the business website domain. */
  whoisRecord: BusinessWhoisRecord;
  /** SSL status for the business website. */
  ssl: BusinessWebsiteSsl;
};

export const businessWebsiteAnalysisSchema: Schema<BusinessWebsiteAnalysis> =
  s.object<BusinessWebsiteAnalysis>({
    isParked: businessCheckBooleanStatusSchema,
    emailIsDeliverable: businessCheckBooleanStatusSchema,
    websiteBuildStatus: businessWebsiteBuildStatusSchema,
    whoisRecord: businessWhoisRecordSchema,
    ssl: businessWebsiteSslSchema,
    _keysMap: {
      isParked: "is_parked",
      emailIsDeliverable: "email_is_deliverable",
      websiteBuildStatus: "website_build_status",
      whoisRecord: "whois_record",
    },
  });
