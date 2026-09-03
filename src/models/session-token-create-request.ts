import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sessionTokenCreateRequestUserSchema,
  type SessionTokenCreateRequestUser,
} from "./session-token-create-request-user.js";

export type SessionTokenCreateRequest = {
  clientId?: string;
  secret?: string;
  templateId: string;
  user?: SessionTokenCreateRequestUser;
  redirectUri?: string;
  androidPackageName?: string;
  webhook?: string;
  userId?: string;
};

export const sessionTokenCreateRequestSchema: Schema<SessionTokenCreateRequest> =
  s.object<SessionTokenCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    templateId: s.string(),
    user: s.optional(s.lazy(() => sessionTokenCreateRequestUserSchema)),
    redirectUri: s.optional(s.string()),
    androidPackageName: s.optional(s.string()),
    webhook: s.optional(s.string()),
    userId: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      templateId: "template_id",
      redirectUri: "redirect_uri",
      androidPackageName: "android_package_name",
      userId: "user_id",
    },
  });
