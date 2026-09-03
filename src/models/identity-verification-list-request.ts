import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdentityVerificationListRequest = {
  secret?: string;
  clientId?: string;
  templateId: string;
  clientUserId?: string;
  userId?: string | null;
  cursor?: string | null;
};

export const identityVerificationListRequestSchema: Schema<IdentityVerificationListRequest> =
  s.object<IdentityVerificationListRequest>({
    secret: s.optional(s.string()),
    clientId: s.optional(s.string()),
    templateId: s.string(),
    clientUserId: s.optional(s.string()),
    userId: s.optionalNullable(s.string()),
    cursor: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      templateId: "template_id",
      clientUserId: "client_user_id",
      userId: "user_id",
    },
  });
