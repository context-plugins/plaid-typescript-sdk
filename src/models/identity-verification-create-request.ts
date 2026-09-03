import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityVerificationCreateRequestUserSchema,
  type IdentityVerificationCreateRequestUser,
} from "./identity-verification-create-request-user.js";

export type IdentityVerificationCreateRequest = {
  clientUserId?: string;
  userId?: string;
  isShareable: boolean;
  templateId: string;
  gaveConsent: boolean;
  user?: IdentityVerificationCreateRequestUser | null;
  clientId?: string;
  secret?: string;
  isIdempotent?: boolean | null;
};

export const identityVerificationCreateRequestSchema: Schema<IdentityVerificationCreateRequest> =
  s.object<IdentityVerificationCreateRequest>({
    clientUserId: s.optional(s.string()),
    userId: s.optional(s.string()),
    isShareable: s.boolean(),
    templateId: s.string(),
    gaveConsent: s.boolean(),
    user: s.optionalNullable(s.lazy(() => identityVerificationCreateRequestUserSchema)),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    isIdempotent: s.optionalNullable(s.boolean()),
    _keysMap: {
      clientUserId: "client_user_id",
      userId: "user_id",
      isShareable: "is_shareable",
      templateId: "template_id",
      gaveConsent: "gave_consent",
      clientId: "client_id",
      isIdempotent: "is_idempotent",
    },
  });
