import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { requirementSubmissionSchema, type RequirementSubmission } from "./requirement-submission.js";

/** Defines the request schema for `/transfer/platform/requirement/submit` */
export type TransferPlatformRequirementSubmitRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The client ID of the originator */
  originatorClientId: string;
  /**
   * Use the `/transfer/platform/requirement/submit` endpoint to submit a list of requirement
   * submissions that all relate to the originator. Must contain between 1 and 50 requirement
   * submissions. See [Requirement type schema
   * documentation](https://docs.google.com/document/d/1NEQkTD0sVK50iAQi6xHigrexDUxZ4QxXqSEfV_FFTiU/)
   * for a list of requirements and possible values.
   */
  requirementSubmissions: RequirementSubmission[];
};

export const transferPlatformRequirementSubmitRequestSchema: Schema<TransferPlatformRequirementSubmitRequest> =
  s.object<TransferPlatformRequirementSubmitRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    originatorClientId: s.string(),
    requirementSubmissions: s.array(s.lazy(() => requirementSubmissionSchema)),
    _keysMap: {
      clientId: "client_id",
      originatorClientId: "originator_client_id",
      requirementSubmissions: "requirement_submissions",
    },
  });
