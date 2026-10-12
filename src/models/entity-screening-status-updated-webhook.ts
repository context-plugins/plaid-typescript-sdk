import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when an entity screening status has changed, which can occur manually via the dashboard or
 * during ongoing monitoring.
 */
export type EntityScreeningStatusUpdatedWebhook = {
  /** `ENTITY_SCREENING` */
  webhookType: string;
  /** `STATUS_UPDATED` */
  webhookCode: string;
  /** The ID of the associated entity screening. */
  entityScreeningId: string;
  /** The Plaid environment the webhook was sent from */
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
