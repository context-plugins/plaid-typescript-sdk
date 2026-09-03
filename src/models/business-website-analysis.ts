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

export type BusinessWebsiteAnalysis = {
  isParked: BusinessCheckBooleanStatus;
  emailIsDeliverable: BusinessCheckBooleanStatus;
  websiteBuildStatus: BusinessWebsiteBuildStatus;
  whoisRecord: BusinessWhoisRecord;
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
