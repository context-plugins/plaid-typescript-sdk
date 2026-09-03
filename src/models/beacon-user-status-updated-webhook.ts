import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type BeaconUserStatusUpdatedWebhook = {
  webhookType: string;
  webhookCode: string;
  beaconUserId: string;
  environment: WebhookEnvironmentValues;
};

export const beaconUserStatusUpdatedWebhookSchema: Schema<BeaconUserStatusUpdatedWebhook> =
  s.object<BeaconUserStatusUpdatedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    beaconUserId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      beaconUserId: "beacon_user_id",
    },
  });
