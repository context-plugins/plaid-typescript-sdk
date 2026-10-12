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

/**
 * A business verification represents a check of a business's identity and risk profile, including
 * information collected about the business and results from third-party data providers.
 */
export type BusinessVerificationCreateResponse = {
  /** ID of the associated business verification. */
  id: string;
  /**
   * A unique ID that identifies the end user in your system. Either a `user_id` or the
   * `client_user_id` must be provided. This ID can also be used to associate user-specific data
   * from other Plaid products. Financial Account Matching requires this field and the
   * `/link/token/create` `client_user_id` to be consistent. Personally identifiable information,
   * such as an email address or phone number, should not be used in the `client_user_id`.
   */
  clientUserId: string;
  /** An ISO8601 formatted timestamp. */
  createdAt: Date;
  /** An ISO8601 formatted timestamp. */
  completedAt: Date | null;
  /** An ISO8601 formatted timestamp. */
  redactedAt: Date | null;
  /** Status of the overall business verification */
  status: BusinessVerificationStatusOverall;
  /** The business information that was used to perform the verification search */
  searchTerms: BusinessSearchTerms;
  /** Results from the KYB (Know Your Business) identity verification check */
  kybCheck: BusinessKybCheck | null;
  /** Results from the business risk assessment check */
  riskCheck: BusinessRiskCheck | null;
  /** Results from the digital presence check. */
  digitalPresenceCheck: BusinessDigitalPresenceCheck | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /** A shareable URL that can be sent directly to the user to complete verification */
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
