import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** ItemWebhookUpdateRequest defines the request schema for `/item/webhook/update` */
export type ItemWebhookUpdateRequest = {
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
  /**
   * The new webhook URL to associate with the Item. To remove a webhook from an Item, set to
   * `null`.
   */
  webhook?: string | null;
};

export const itemWebhookUpdateRequestSchema: Schema<ItemWebhookUpdateRequest> =
  s.object<ItemWebhookUpdateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    webhook: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
