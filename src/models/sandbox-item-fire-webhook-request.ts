import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { webhookCodeSchema, type WebhookCode } from "./webhook-code.js";
import { webhookTypeSchema, type WebhookType } from "./webhook-type.js";

/** SandboxItemFireWebhookRequest defines the request schema for `/sandbox/item/fire_webhook` */
export type SandboxItemFireWebhookRequest = {
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
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
  /** The webhook types that can be fired by this test endpoint. */
  webhookType?: WebhookType;
  /** The webhook codes that can be fired by this test endpoint. */
  webhookCode: WebhookCode;
};

export const sandboxItemFireWebhookRequestSchema: Schema<SandboxItemFireWebhookRequest> =
  s.object<SandboxItemFireWebhookRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    webhookType: s.optional(s.lazy(() => webhookTypeSchema)),
    webhookCode: webhookCodeSchema,
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
    },
  });
