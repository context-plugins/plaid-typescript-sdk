import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/** Fired when a Beacon User created within your organization matches one of your existing users. */
export type BeaconDuplicateDetectedWebhook = {
  /** `BEACON` */
  webhookType: string;
  /** `DUPLICATE_DETECTED` */
  webhookCode: string;
  /** The ID of the associated Beacon Duplicate. */
  beaconDuplicateId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const beaconDuplicateDetectedWebhookSchema: Schema<BeaconDuplicateDetectedWebhook> =
  s.object<BeaconDuplicateDetectedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    beaconDuplicateId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      beaconDuplicateId: "beacon_duplicate_id",
    },
  });
