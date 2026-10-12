import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when there has been a new user event. The webhook payload contains limited information
 * about the event. For full event details, call
 * [`/protect/event/get`](https://plaid.com/docs/api/products/protect/#protecteventget).
 */
export type ProtectUserEventWebhook = {
  /** `"PROTECT"` */
  webhookType: string;
  /** `PROTECT_USER_EVENT` */
  webhookCode: string;
  /** The event ID of the user event that occurred. */
  eventId: string;
  /**
   * The type of user event that occurred. Possible values include `LINK_COMPLETE` (the Link session
   * has finished and a Trust Index score has been computed without waiting for transaction
   * extraction) and `PROTECT_RUN_FINISH` (extraction-required scoring is complete, including
   * transaction extraction; may arrive 30 seconds or more after Link completion).
   */
  eventType: string;
  /**
   * The timestamp of the event, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format, e.g.
   * `"2017-09-14T14:42:19.350Z"`
   */
  timestamp: Date;
  /** The Plaid User ID. */
  userId: string | null;
  /**
   * The `client_user_id` provided by the client when the user was created via `/user/create` or
   * Link.
   */
  clientUserId?: string | null;
  /** An identifier for the Link session this event occurred in */
  linkSessionId?: string | null;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const protectUserEventWebhookSchema: Schema<ProtectUserEventWebhook> =
  s.object<ProtectUserEventWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    eventId: s.string(),
    eventType: s.string(),
    timestamp: s.dateTime(),
    userId: s.nullable(s.string()),
    clientUserId: s.optionalNullable(s.string()),
    linkSessionId: s.optionalNullable(s.string()),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      eventId: "event_id",
      eventType: "event_type",
      userId: "user_id",
      clientUserId: "client_user_id",
      linkSessionId: "link_session_id",
    },
  });
