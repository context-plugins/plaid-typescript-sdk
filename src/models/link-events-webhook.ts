import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkEventSchema, type LinkEvent } from "./link-event.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type LinkEventsWebhook = {
  webhookType: string;
  webhookCode: string;
  events: LinkEvent[];
  linkSessionId: string;
  linkToken: string;
  environment: WebhookEnvironmentValues;
};

export const linkEventsWebhookSchema: Schema<LinkEventsWebhook> = s.object<LinkEventsWebhook>({
  webhookType: s.string(),
  webhookCode: s.string(),
  events: s.array(s.lazy(() => linkEventSchema)),
  linkSessionId: s.string(),
  linkToken: s.string(),
  environment: webhookEnvironmentValuesSchema,
  _keysMap: {
    webhookType: "webhook_type",
    webhookCode: "webhook_code",
    linkSessionId: "link_session_id",
    linkToken: "link_token",
  },
});
