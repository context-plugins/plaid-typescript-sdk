import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type BeaconReportUpdatedWebhook = {
  webhookType: string;
  webhookCode: string;
  beaconReportId: string;
  environment: WebhookEnvironmentValues;
};

export const beaconReportUpdatedWebhookSchema: Schema<BeaconReportUpdatedWebhook> =
  s.object<BeaconReportUpdatedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    beaconReportId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      beaconReportId: "beacon_report_id",
    },
  });
