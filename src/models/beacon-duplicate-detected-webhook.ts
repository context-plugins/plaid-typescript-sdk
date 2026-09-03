import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type BeaconDuplicateDetectedWebhook = {
  webhookType: string;
  webhookCode: string;
  beaconDuplicateId: string;
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
