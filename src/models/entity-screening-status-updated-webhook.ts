import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type EntityScreeningStatusUpdatedWebhook = {
  webhookType: string;
  webhookCode: string;
  entityScreeningId: string;
  environment: WebhookEnvironmentValues;
};

export const entityScreeningStatusUpdatedWebhookSchema: Schema<EntityScreeningStatusUpdatedWebhook> =
  s.object<EntityScreeningStatusUpdatedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    entityScreeningId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      entityScreeningId: "entity_screening_id",
    },
  });
