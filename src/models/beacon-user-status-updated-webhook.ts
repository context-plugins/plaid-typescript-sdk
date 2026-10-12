import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when a Beacon User status has changed, which can occur manually via the dashboard or when
 * information is reported to the Beacon network.
 */
export type BeaconUserStatusUpdatedWebhook = {
  /** `BEACON` */
  webhookType: string;
  /** `USER_STATUS_UPDATED` */
  webhookCode: string;
  /** The ID of the associated Beacon user. */
  beaconUserId: string;
  /** The Plaid environment the webhook was sent from */
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
