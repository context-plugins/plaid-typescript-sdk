import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProtectUserInsightsGetRequest = {
  clientId?: string;
  secret?: string;
  userId?: string;
  clientUserId?: string;
};

export const protectUserInsightsGetRequestSchema: Schema<ProtectUserInsightsGetRequest> =
  s.object<ProtectUserInsightsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    clientUserId: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      clientUserId: "client_user_id",
    },
  });
