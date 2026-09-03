import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  businessDigitalPresenceCheckSchema,
  type BusinessDigitalPresenceCheck,
} from "./business-digital-presence-check.js";
import { businessKybCheckSchema, type BusinessKybCheck } from "./business-kyb-check.js";
import { businessRiskCheckSchema, type BusinessRiskCheck } from "./business-risk-check.js";
import { businessSearchTermsSchema, type BusinessSearchTerms } from "./business-search-terms.js";
import {
  businessVerificationStatusOverallSchema,
  type BusinessVerificationStatusOverall,
} from "./business-verification-status-overall.js";

export type BusinessVerificationCreateResponse = {
  id: string;
  clientUserId: string;
  createdAt: Date;
  completedAt: Date | null;
  redactedAt: Date | null;
  status: BusinessVerificationStatusOverall;
  searchTerms: BusinessSearchTerms;
  kybCheck: BusinessKybCheck | null;
  riskCheck: BusinessRiskCheck | null;
  digitalPresenceCheck: BusinessDigitalPresenceCheck | null;
  requestId: string;
  shareableUrl: string | null;
};

export const businessVerificationCreateResponseSchema: Schema<BusinessVerificationCreateResponse> =
  s.object<BusinessVerificationCreateResponse>({
    id: s.string(),
    clientUserId: s.string(),
    createdAt: s.dateTime(),
    completedAt: s.nullable(s.dateTime()),
    redactedAt: s.nullable(s.dateTime()),
    status: businessVerificationStatusOverallSchema,
    searchTerms: businessSearchTermsSchema,
    kybCheck: s.nullable(s.lazy(() => businessKybCheckSchema)),
    riskCheck: s.nullable(s.lazy(() => businessRiskCheckSchema)),
    digitalPresenceCheck: s.nullable(s.lazy(() => businessDigitalPresenceCheckSchema)),
    requestId: s.string(),
    shareableUrl: s.nullable(s.string()),
    _keysMap: {
      clientUserId: "client_user_id",
      createdAt: "created_at",
      completedAt: "completed_at",
      redactedAt: "redacted_at",
      searchTerms: "search_terms",
      kybCheck: "kyb_check",
      riskCheck: "risk_check",
      digitalPresenceCheck: "digital_presence_check",
      requestId: "request_id",
      shareableUrl: "shareable_url",
    },
  });
