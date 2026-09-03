import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type BeaconReportSyndicationCreatedWebhook = {
  webhookType: string;
  webhookCode: string;
  beaconReportSyndicationId: string;
  environment: WebhookEnvironmentValues;
};

export const beaconReportSyndicationCreatedWebhookSchema: Schema<BeaconReportSyndicationCreatedWebhook> =
  s.object<BeaconReportSyndicationCreatedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    beaconReportSyndicationId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      beaconReportSyndicationId: "beacon_report_syndication_id",
    },
  });
