import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkEventMetadata = {
  errorCode?: string;
  errorMessage?: string;
  errorType?: string;
  exitStatus?: string;
  institutionId?: string;
  institutionName?: string;
  institutionSearchQuery?: string;
  requestId?: string;
  mfaType?: string;
  viewName?: string;
  selection?: string;
  brandName?: string;
  matchReason?: string;
  routingNumber?: string;
  accountNumberMask?: string;
};

export const linkEventMetadataSchema: Schema<LinkEventMetadata> = s.object<LinkEventMetadata>({
  errorCode: s.optional(s.string()),
  errorMessage: s.optional(s.string()),
  errorType: s.optional(s.string()),
  exitStatus: s.optional(s.string()),
  institutionId: s.optional(s.string()),
  institutionName: s.optional(s.string()),
  institutionSearchQuery: s.optional(s.string()),
  requestId: s.optional(s.string()),
  mfaType: s.optional(s.string()),
  viewName: s.optional(s.string()),
  selection: s.optional(s.string()),
  brandName: s.optional(s.string()),
  matchReason: s.optional(s.string()),
  routingNumber: s.optional(s.string()),
  accountNumberMask: s.optional(s.string()),
  _keysMap: {
    errorCode: "error_code",
    errorMessage: "error_message",
    errorType: "error_type",
    exitStatus: "exit_status",
    institutionId: "institution_id",
    institutionName: "institution_name",
    institutionSearchQuery: "institution_search_query",
    requestId: "request_id",
    mfaType: "mfa_type",
    viewName: "view_name",
    brandName: "brand_name",
    matchReason: "match_reason",
    routingNumber: "routing_number",
    accountNumberMask: "account_number_mask",
  },
});
