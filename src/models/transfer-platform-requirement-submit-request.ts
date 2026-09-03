import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { requirementSubmissionSchema, type RequirementSubmission } from "./requirement-submission.js";

export type TransferPlatformRequirementSubmitRequest = {
  clientId?: string;
  secret?: string;
  originatorClientId: string;
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
