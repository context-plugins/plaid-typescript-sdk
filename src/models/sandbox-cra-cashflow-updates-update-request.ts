import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cashFlowUpdatesEventWebhookCodesSchema,
  type CashFlowUpdatesEventWebhookCodes,
} from "./cash-flow-updates-event-webhook-codes.js";

/**
 * SandboxCraCashflowUpdatesUpdateRequest defines the request schema for
 * `/sandbox/cra/cashflow_updates/update`
 */
export type SandboxCraCashflowUpdatesUpdateRequest = {
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
  userToken?: string;
  /** Webhook codes corresponding to the Cash Flow Updates events to be simulated. */
  webhookCodes?: CashFlowUpdatesEventWebhookCodes[] | null;
  /**
   * A unique user identifier, created by `/user/create`. Integrations that began using
   * `/user/create` after December 10, 2025 use this field to identify a user instead of the
   * `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userId?: string;
};

export const sandboxCraCashflowUpdatesUpdateRequestSchema: Schema<SandboxCraCashflowUpdatesUpdateRequest> =
  s.object<SandboxCraCashflowUpdatesUpdateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.optional(s.string()),
    webhookCodes: s.optionalNullable(s.array(s.lazy(() => cashFlowUpdatesEventWebhookCodesSchema))),
    userId: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
      webhookCodes: "webhook_codes",
      userId: "user_id",
    },
  });
