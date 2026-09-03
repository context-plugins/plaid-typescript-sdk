import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craUserTierSchema, type CraUserTier } from "./cra-user-tier.js";

export type CraPartnerInsightsGetRequest = {
  clientId?: string;
  secret?: string;
  userToken: string;
  userTier?: CraUserTier | null;
};

export const craPartnerInsightsGetRequestSchema: Schema<CraPartnerInsightsGetRequest> =
  s.object<CraPartnerInsightsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.string(),
    userTier: s.optionalNullable(s.lazy(() => craUserTierSchema)),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
      userTier: "user_tier",
    },
  });
