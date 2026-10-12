import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craUserTierSchema, type CraUserTier } from "./cra-user-tier.js";

/** CraPartnerInsightsGetRequest defines the request schema for `/cra/partner_insights/get`. */
export type CraPartnerInsightsGetRequest = {
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
  /**
   * The user token associated with the user for which data is being requested. This field is used
   * only by customers with pre-existing integrations that already use the `user_token` field. All
   * other customers should use the `user_id` instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userToken: string;
  /** The tier of the user. */
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
