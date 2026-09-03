import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type ProtectUserEventWebhook = {
  webhookType: string;
  webhookCode: string;
  eventId: string;
  eventType: string;
  timestamp: Date;
  userId: string | null;
  clientUserId?: string | null;
  linkSessionId?: string | null;
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
