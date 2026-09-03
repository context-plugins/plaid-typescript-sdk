import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type HostedMmdVerificationWebhook = {
  webhookType: string;
  webhookCode: string;
  status: string;
  itemId: string;
  accountId: string;
  environment?: WebhookEnvironmentValues;
};

export const hostedMmdVerificationWebhookSchema: Schema<HostedMmdVerificationWebhook> =
  s.object<HostedMmdVerificationWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    status: s.string(),
    itemId: s.string(),
    accountId: s.string(),
    environment: s.optional(s.lazy(() => webhookEnvironmentValuesSchema)),
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      accountId: "account_id",
    },
  });
